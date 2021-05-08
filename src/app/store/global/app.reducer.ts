import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../auth/auth.state';
import * as fromAuthReducer from '../auth/auth.reducer';

export interface AppState {
  auth: AuthState,
  router: RouterReducerState
}


export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuthReducer.iAuthStateReducer,
  router: routerReducer
}
