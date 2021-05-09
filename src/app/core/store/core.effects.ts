import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { concatMap, mergeMap, switchMap, withLatestFrom, combineLatest, tap } from "rxjs/operators";
import { FirebaseApiService } from "src/app/shared/services/api.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import * as fromCoreExerActions from './core.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { Exercise } from "src/app/admin/store/admin.state";
import { ExerciseStatus } from "./core.states";
import { AuthService } from "src/app/shared/services/auth.service";
import { AppUser } from "src/app/store/auth/auth.state";

@Injectable()
export class CoreExerEffects {

  constructor(public actions$: Actions, public ts: ToasterService,
    private fs: FirebaseApiService, private as: AuthService,
    private sbs: ToasterService) {
  }

  loadAllExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreExerActions.getExerByTypeStart),
      withLatestFrom(this.as.currentUser$),
      mergeMap((exerStatus) => {
        const user: AppUser = exerStatus[1];

        return this.fs.getExercises(exerStatus[0].status).then(
          (res) => {
            const dataResult = this.fs.convertCollectionDocData<Exercise>(res, 'id');
            return fromCoreExerActions.getExerByTypeSuccess({data: dataResult, fetchTime: new Date().getTime(),
              status: exerStatus[0].status});
          },
          (rej) => {
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromCoreExerActions.getExerByTypeFailed({errMsg: msg});
          }
        )
      })
    );
  });

  saveExerWithStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreExerActions.saveExerciseAndStatusStart),
      mergeMap((res) => {
        const exer: Exercise = {...res.data};
        const date: number = res.date;
        const status: ExerciseStatus = res.status;
        let saveRef, id;
        if (status === "Started") {
          saveRef = this.fs.userInProgressCollection.doc();
          id = saveRef.id;
          exer.inProgressId = id;
        } else if (status === "Completed") {
          saveRef = this.fs.userCompletedCollection.doc();
          id = saveRef.id;
          exer.inCompletedId = id;
        }
        return this.fs.saveExerciseWithState(exer, status, date, id).then(
          (res) => {
            return fromCoreExerActions.saveExerciseAndStatusSuccess({data: exer});
          },
          (rej) => {
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromCoreExerActions.saveExerciseAndStatusFailure({errMsg: msg});
          }
        )
      })
    );
  });

  apiFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromCoreExerActions.saveExerciseAndStatusFailure,
        fromCoreExerActions.getExerByTypeFailed]),
      tap((res) => {
        this.sbs.openSnackBar("Error occured! " + res.errMsg, 6000);
      })
    );
  }, {dispatch: false});

}

export const coreExerEffects = [
  CoreExerEffects
]
