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

}

export const appEffects = [
  AppGlobalEffects, AuthEffects
]
