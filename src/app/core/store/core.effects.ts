import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { mergeMap, switchMap } from "rxjs/operators";
import { FirebaseApiService } from "src/app/shared/services/api.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import * as fromCoreExerActions from './core.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { Exercise } from "src/app/admin/store/admin.state";
import { ExerciseStatus } from "./core.states";

@Injectable()
export class CoreExerEffects {

  constructor(public actions$: Actions, public ts: ToasterService,
    private fs: FirebaseApiService) {
  }

  loadAllExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreExerActions.getAllExerStart),
      switchMap(() => {
        return this.fs.getExercises().then(
          (res) => {
            const dataResult = this.fs.convertCollectionDocData<Exercise>(res);
            return fromCoreExerActions.getAllExerSuccess({data: dataResult, fetchTime: new Date().getTime()});
          },
          (rej) => {
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromCoreExerActions.getAllExerFailed({errMsg: msg});
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
