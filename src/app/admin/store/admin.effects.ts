import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, filter, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { VerifiedUser } from "src/app/shared/models/user.model";
import * as fromAdminActions from './admin.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { FirebaseApiService } from "src/app/shared/services/api.service";
import { ToasterService } from "src/app/shared/services/toaster.service";


@Injectable()
export class AdminEffects {

  constructor(public actions$: Actions, private as: FirebaseApiService, private sbs: ToasterService) {
  }

  saveExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.saveAllExerStart),
      concatMap((res) => {

        return this.as.upsertExercises(res.exers).then(
          (result) => {
            this.sbs.openSnackBar("Successfully saved " +  res.exers.length + " exercises");
            return fromAdminActions.saveAllExerSuccess();
          },
          (rej) => {
            this.sbs.openSnackBar("Error occured!", 6000);
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            console.log(rej)
            return fromAdminActions.saveAllExerFailure({errMsg: msg});
          }
        );
      })
    );
  });

}



export const adminEffects = [AdminEffects];

