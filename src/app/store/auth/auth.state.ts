export interface AuthState {
  currentUser: any;
  loading: boolean;
  registerUserName?: string | undefined;
  loginUserName?: string | undefined;
  registerError?: boolean;
  registerErrMsg?: string | undefined;
  loginError?: boolean;
  loginErrorMsg?: string | undefined;
}
