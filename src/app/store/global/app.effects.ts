import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { catchError, filter, map } from "rxjs/operators";
import firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, Observer, of } from "rxjs";
import { AuthEffects } from "../auth/auth.effects";


@Injectable()
export class AppGlobalEffects {

  constructor(public actions$: Actions) {
  }

  userFromFirebaseAuthState$ = createEffect(() => {
    return makeAuthstateObservable(firebase.auth()).pipe(
      map((res: firebase.User | null) => {
        console.log("user: ",res)
      }),
      catchError((e) => {
        console.log(e);
        return of({ type: 'Error!' })
      })
    )

  }, {dispatch: false});

}

export function makeAuthstateObservable(auth: firebase.auth.Auth): Observable<firebase.User | null> {
  const authState = new Observable((observer: Observer<firebase.User | null | undefined>) => {
    auth.onAuthStateChanged(
      (user?: firebase.User | null) => observer.next(user),
      (error: firebase.auth.Error) => observer.error(error),
      () => observer.complete()
    );
  });
  return authState;
}


export const appEffects = [
  AppGlobalEffects, AuthEffects
]
