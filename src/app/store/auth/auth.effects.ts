import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import firebase from 'firebase/app';
import 'firebase/auth';
import { exhaustMap, filter, map } from "rxjs/operators";
import { VerifiedUser } from "src/app/shared/models/user.model";
import * as fromAuthActions from './auth.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { from } from "rxjs";


@Injectable()
export class AuthEffects {

  constructor(public actions$: Actions) {
  }

  registerNewUserEmailPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.userRegisterStart),
      exhaustMap((data) => {
        const email: string = data.name;
        const pw: string = data.password;
        const sessionType: string = false ?
          firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;

        return firebase.auth().setPersistence(sessionType).then(
          () => {
            return firebase.auth().createUserWithEmailAndPassword(email, pw)
          }
        ).then(
          (user: firebase.auth.UserCredential) => {

            const verified = new VerifiedUser(new Date().getTime(), user.user?.displayName, user.user?.email, user.user?.emailVerified,
              user.user?.isAnonymous, null, user.user?.photoURL, user.user?.providerData, user.user?.metadata, user.user?.tenantId,
              user.user?.uid, user.user?.phoneNumber, []);

            return fromAuthActions.userRegisterSuccess({user: verified});
          },
          (rej) => {
            console.log("err: ",rej);
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromAuthActions.userRegisterFailed({name: email, errorMsg: authErrMsg});
          }
        );

      })
    );
  });

  userLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.userLogoutStart),
      exhaustMap(() => {
        return firebase.auth().signOut().then(
          () => {
            return fromAuthActions.userLogoutSuccess();
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromAuthActions.userLogoutFailed({errorMsg: authErrMsg});
          }
        )
      })
    );
  });
}

