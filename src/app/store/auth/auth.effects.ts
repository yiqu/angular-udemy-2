import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import firebase from 'firebase/app';
import 'firebase/auth';
import { catchError, delay, exhaustMap, filter, map, switchMap, take, tap } from "rxjs/operators";
import { VerifiedUser } from "src/app/shared/models/user.model";
import * as fromAuthActions from './auth.actions';
import * as fromFirebaseUtils from '../../shared/firebase.utils';
import { from, Observable, Observer, of } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { AppUser, FirebaseAppUser } from "./auth.state";
import * as fromCoreExerActions from '../../core/store/core.actions';

/**
 * Convert Firebase's Auth to an Observable
 * @param auth
 */
export function makeAuthstateObservable(auth: firebase.auth.Auth): Observable<FirebaseAppUser> {
  const authState = new Observable((observer: Observer<FirebaseAppUser>) => {
    auth.onAuthStateChanged(
      (user: firebase.User | null) => {
        if (user) {
          return observer.next(user);
        }
        return observer.next(undefined);
      },
      (error: firebase.auth.Error) => observer.error(error),
      () => observer.complete()
    );
  });
  return authState;
}


@Injectable()
export class AuthEffects {

  constructor(public actions$: Actions, public as: AuthService) {
  }

  /**
   * Will just listen for user state when it's created
   */
  userFromFirebaseAuthState$ = createEffect(() => {
    return makeAuthstateObservable(firebase.auth()).pipe(
      map((user: FirebaseAppUser) => {
        console.log("current user: ", user?.email ?? "NO USER");
        let newUserState = undefined;
        if (user?.email) {
          newUserState = new VerifiedUser(new Date().getTime(), user?.displayName, user?.email, user?.emailVerified,
            user?.isAnonymous, null, user?.photoURL, user?.providerData, user?.metadata, user?.tenantId,
            user?.uid, user?.phoneNumber, []);
        }
        return fromAuthActions.userStateChanged({user: newUserState})
      }),
      catchError((e) => {
        console.log(e);
        return of(fromAuthActions.userLoginFailed({name:"", errorMsg: e}));
      })
    )
  });

  loadAllExercisesAfterUserStateChange$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.userStateChanged),
      map((res) => {
        return fromCoreExerActions.getAllExerStart()
      })
    );
  });

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

            return fromAuthActions.userRegisterSuccess({redirectPath: "home"});
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

  userLoginEmailPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.userLoginStart),
      exhaustMap((res) => {
        const email: string = res.name;
        const password: string = res.password;
        const sessionType: string = false ?
          firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;

        return firebase.auth().setPersistence(sessionType).then(
          () => {
            return firebase.auth().signInWithEmailAndPassword(email, password);
          }
        ).then(
          (user: firebase.auth.UserCredential) => {
            const verified = new VerifiedUser(new Date().getTime(), user.user?.displayName, user.user?.email, user.user?.emailVerified,
              user.user?.isAnonymous, null, user.user?.photoURL, user.user?.providerData, user.user?.metadata, user.user?.tenantId,
              user.user?.uid, user.user?.phoneNumber, []);

            return fromAuthActions.userLoginSuccess({redirectPath: "home"});
          },
          (rej) => {
            console.log("err: ",rej);
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromAuthActions.userLoginFailed({name: email, errorMsg: authErrMsg});
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
            this.as.navigateToPath();
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

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromAuthActions.userLoginSuccess, fromAuthActions.userRegisterSuccess]),
      map((res) => {
        return fromAuthActions.redirectAfterLogin({ path: res.redirectPath });
      })
    );
  });

  redirectPath$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.redirectAfterLogin),
      tap((res) => {
        const path = res.path;
        if (path) {
          this.as.navigateToPath(path);
        }
      })
    );
  }, {dispatch: false});
}

