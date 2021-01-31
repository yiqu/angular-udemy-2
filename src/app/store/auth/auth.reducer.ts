import { AuthState } from "./auth.state";
import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from './auth.actions';

export const inititalState: AuthState = {
  currentUser: undefined,
  loading: false
}

export const authStateReducer = createReducer(
  inititalState,

  on(userActions.userRegisterStart, (state, {name, password}) => {
    return {
      ...state,
      registerUserName: name,
      authLoading: true
    }
  }),

  on(userActions.userRegisterSuccess, (state, {user}) => {
    return {
      ...state,
      authLoading: false,
      registerError: false,
      registerErrMsg: undefined
    }
  }),

  on(userActions.userRegisterFailed, (state, {name, errorMsg}) => {
    return {
      ...state,
      registerUserName: name,
      authLoading: false,
      registerError: true,
      registerErrMsg: errorMsg
    }
  }),

  on(userActions.userLoginStart, (state, {name, password}) => {
    return {
      ...state,
      loginUserName: name,
      authLoading: true
    }
  }),

  on(userActions.userLoginFailed, (state, {name, errorMsg}) => {
    return {
      ...state,
      loginUserName: name,
      authLoading: false,
      loginError: true,
      loginErrorMsg: errorMsg
    }
  }),

  on(userActions.userLoginSuccess, (state, {user}) => {
    return {
      ...state,
      currentUser: user,
      authLoading: false,
      loginError: false,
      loginErrorMsg: undefined
    }
  }),

  on(userActions.userLogoutSuccess, (state) => {
    return {
      ...state,
      currentUser: undefined,
      authLoading: false
    }
  }),

  on(userActions.userLogoutStart, (state) => {
    return {
      ...state,
      authLoading: true
    }
  }),

  on(userActions.userLogoutFailed, (state) => {
    return {
      ...state,
      authLoading: false
    }
  })

)


export function iAuthStateReducer(state: AuthState | undefined, action: Action) {
  return authStateReducer(state, action);
}
