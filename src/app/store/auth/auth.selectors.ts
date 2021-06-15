import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VerifiedUser } from "src/app/shared/models/user.model";
import { AppUser, AuthState, ErrorInfo } from "./auth.state";

const defaultProfileImg: string = "assets/user/default-user5.png";
const loggedInImg: string = "assets/user/loggedin.png";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const getCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState): AppUser => {
    return state.currentUser;
  }
);

export const getAuthStateLoading = createSelector(
  selectAuthState,
  (state: AuthState): boolean => {
    return state.loading;
  }
)

export const getTopNavUserLogo = createSelector(
  selectAuthState,
  (state: AuthState) => {
    if (state.currentUser) {
      return loggedInImg;
    }
    return defaultProfileImg;
  }
)

export const getError = createSelector(
  selectAuthState,
  (state: AuthState): ErrorInfo => {
    return {
      error: state.loginError,
      errorMsg: state.loginErrorMsg,
      regError: state.registerError,
      regErrMsg: state.registerErrMsg
    }
  }
)

export const getUserResetLoginEmail = createSelector(
  selectAuthState,
  (state: AuthState): string | undefined => {
    return state.resetLoginEmail;
  }
)

export const getUserResetLoginLoading = createSelector(
  selectAuthState,
  (state: AuthState): boolean | undefined=> {
    return state.resetLoginLoading;
  }
)
