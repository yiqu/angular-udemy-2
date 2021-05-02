import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { concatMap, mergeMap, switchMap, withLatestFrom, combineLatest } from "rxjs/operators";
import { FirebaseApiService } from "src/app/shared/services/api.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import * as fromCoreExerActions from './core.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { Exercise } from "src/app/admin/store/admin.state";
import { ExerciseStatus } from "./core.states";
import { AuthService } from "src/app/shared/services/auth.service";

@Injectable()
export class CoreExerEffects {

  constructor(public actions$: Actions, public ts: ToasterService,
    private fs: FirebaseApiService, private as: AuthService) {
  }

  loadAllExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreExerActions.getExerByTypeStart),
      combineLatest(this.as.currentUser$),
      mergeMap(([exerStatus, currentUser]) => {
        return this.fs.getExercises(exerStatus.status).then(
          (res) => {
            const dataResult = this.fs.convertCollectionDocData<Exercise>(res);
            return fromCoreExerActions.getExerByTypeSuccess({data: dataResult, fetchTime: new Date().getTime(),
              status: exerStatus.status});
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
        console.log(res)
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

}

export const coreExerEffects = [
  CoreExerEffects
]
