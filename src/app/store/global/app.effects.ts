import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, filter, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import firebase from 'firebase/app';
import 'firebase/auth';
import { EMPTY, empty, fromEvent, interval, Observable, Observer, of } from "rxjs";
import { AuthEffects } from "../auth/auth.effects";
import * as fromAppActions from './app.actions';
import { AppState } from "./app.reducer";
import { Store } from "@ngrx/store";
import * as fromAuthSelectors from '../auth/auth.selectors';


@Injectable()
export class AppGlobalEffects {

  // time that user is INACTIVE
  timeInactive: number = 0;

  constructor(public actions$: Actions, private store: Store<AppState>) {
  }

  // userActivity$ = createEffect(() => {
  //   return fromEvent(document, 'click').pipe(
  //     tap(() => {
  //       this.timeInactive = 0; // reset inactive to 0
  //       console.log("clicked")
  //     }),
  //     switchMap((res) => {
  //       return interval(1000);
  //     }),
  //     filter((res) => {
  //       this.timeInactive++;
  //       console.log(this.timeInactive);
  //       return this.timeInactive > 5;
  //     }),
  //     withLatestFrom(this.store.select(fromAuthSelectors.getCurrentUser)),
  //     filter(([res, user]) => {
  //       return !!user; // inactive is higher than threshold AND user is logged in, fire action
  //     }),
  //     map(([res, user]) => {
  //       return fromAppActions.userHasBeenInActive({inactiveTimeInMilli: res});
  //     })
  //   );
  // });


  alertUserOfInactive$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAppActions.userHasBeenInActive),
      map(() => {
        this.timeInactive = 0; // reset inactive time back to 0, and log user out
        console.log("user is inactive!!")
      })
    );
  }, {dispatch: false});




}

export const appEffects = [
  AppGlobalEffects, AuthEffects
]
