import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { switchMap } from "rxjs/operators";
import { FirebaseApiService } from "src/app/shared/services/api.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import * as fromCoreExerActions from './core.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { Exercise } from "src/app/admin/store/admin.state";

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

}

export const coreExerEffects = [
  CoreExerEffects
]
