import { VerifiedUser } from "src/app/shared/models/user.model";

export interface AuthState {
  currentUser: VerifiedUser | undefined;
  loading: boolean;
  registerUserName?: string | undefined;
  loginUserName?: string | undefined;
  registerError?: boolean;
  registerErrMsg?: string | undefined;
  loginError?: boolean;
  loginErrorMsg?: string | undefined;
}
