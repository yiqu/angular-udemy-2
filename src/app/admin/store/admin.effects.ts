import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, filter, map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { VerifiedUser } from "src/app/shared/models/user.model";
import * as fromAdminActions from './admin.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { FirebaseApiService } from "src/app/shared/services/api.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { Exercise } from "./admin.state";
import * as fromCoreExerActions from '../../core/store/core.actions';

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

  getAllExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.getAllExerStart),
      switchMap(() => {
        return this.as.getExercises("All").then(
          (res) => {
            const dataResult = this.as.convertCollectionDocData<Exercise>(res);
            return fromAdminActions.getAllExerSuccess({exers: dataResult});
          },
          (rej) => {
            this.sbs.openSnackBar("Error occured!", 6000);
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromAdminActions.getAllExerFailure({errMsg: msg});
          }
        )
      })
    );
  });

  updateSingleExer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.updateExerStart),
      exhaustMap((res) => {
        const exer: Exercise = res.exer;
        return this.as.updateExercise(exer).then(
          (result) => {
            this.sbs.openSnackBar("Successfully updated " +  exer.name + "!");
            return fromAdminActions.updateExerSuccess({exer: exer});
          },
          (rej) => {
            this.sbs.openSnackBar("Error occured!", 6000);
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            console.log(rej)
            return fromAdminActions.updateExerFailed({errMsg: msg});
          }
        )
      })
    );
  });

  reloadExercise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.updateExerSuccess, fromAdminActions.deleteExerSuccess),
      map(() => {
        return fromAdminActions.getAllExerStart();
      })
    );
  });

  navigateAfterCreatingNewExer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.saveAllExerSuccess),
      map(() => {
        this.as.navigatePath(['/', 'my-trainings']);
      })
    );
  }, {dispatch: false});

  reloadAllCoreExercises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromAdminActions.updateExerSuccess, fromAdminActions.deleteExerSuccess,
        fromAdminActions.saveAllExerSuccess]),
      switchMap(() => {
        return [
          fromCoreExerActions.getExerByTypeStart({status: "All"})
        ]
      })
    );
  });

  deleteExercise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.deleteExerStart),
      exhaustMap((res) => {
        return this.as.deleteExercises(res.exers).then(
          (result) => {
            this.sbs.openSnackBar("Successfully deleted " +  res.exers.length + " exercises !");
            return fromAdminActions.deleteExerSuccess({exers: res.exers});
          },
          (rej) => {
            this.sbs.openSnackBar("Error occured!", 6000);
            const msg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            console.log(rej)
            return fromAdminActions.deleteExerFailed({errMsg: msg});
          }
        )
      })
    );
  });


}



export const adminEffects = [AdminEffects];

