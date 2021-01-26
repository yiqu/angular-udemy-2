import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VerifiedUser } from "src/app/shared/models/user.model";
import { AuthState } from "./auth.state";

const defaultProfileImg: string = "assets/user/default-user5.png";
const loggedInImg: string = "assets/user/loggedin.png";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const getCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState): VerifiedUser | undefined => {
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
