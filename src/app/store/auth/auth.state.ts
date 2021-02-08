import { VerifiedUser } from "src/app/shared/models/user.model";
import firebase from 'firebase/app';

export const NO_USER: string = 'NO_USER';

export interface AuthState {
  currentUser: AppUser;
  loading: boolean;
  registerUserName?: string | undefined;
  loginUserName?: string | undefined;
  registerError?: boolean;
  registerErrMsg?: string | undefined;
  loginError?: boolean;
  loginErrorMsg?: string | undefined;
  redirectPathAfterLogin?: string;
}

export type AppUser = VerifiedUser | null | undefined;
export type FirebaseAppUser = firebase.User | undefined;
