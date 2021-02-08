import { createAction, props } from '@ngrx/store';
import { VerifiedUser } from 'src/app/shared/models/user.model';

const USER_LOGIN_START: string = "[Auth/Login] Login start";
const USER_LOGIN_SUCCESS: string = "[Auth/Login] Login successful";
const USER_LOGIN_FAILED: string = "[Auth/Login] Login failed";

const USER_REGISTER_START: string = "[Auth/Register] Register new user start";
const USER_REGISTER_SUCCESS: string = "[Auth/Register] Register new user successful";
const USER_REGISTER_FAILED: string = "[Auth/Register] Register new user failed";

const USER_LOGOUT_START: string = "[Auth] User logout start";
const USER_LOGOUT_SUCCESS: string = "[Auth] User logout successful";
const USER_LOGOUT_FAILED: string = "[Auth] User logout failed";

const REDIRECT_AFTER_LOGIN: string = "[Auth/Redirect] Redirect to new path after login";
const USER_STATE_CHANGED: string = "[Auth/User State] User state changed";

export const userLoginStart = createAction(
  USER_LOGIN_START,
  props<{name: string, password: string}>()
);

export const userLoginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  props<{redirectPath?: string}>()
);

export const userLoginFailed = createAction(
  USER_LOGIN_FAILED,
  props<{name: string, errorMsg: string}>()
);

export const redirectAfterLogin = createAction(
  REDIRECT_AFTER_LOGIN,
  props<{path?: string}>()
);

export const userRegisterStart = createAction(
  USER_REGISTER_START,
  props<{name: string, password: string}>()
);

export const userRegisterSuccess = createAction(
  USER_REGISTER_SUCCESS,
  props<{redirectPath?: string}>()
);

export const userRegisterFailed = createAction(
  USER_REGISTER_FAILED,
  props<{name: string, errorMsg: string}>()
);

export const userLogoutStart = createAction(
  USER_LOGOUT_START
)

export const userLogoutSuccess = createAction(
  USER_LOGOUT_SUCCESS
)

export const userLogoutFailed = createAction(
  USER_LOGOUT_FAILED,
  props<{errorMsg: string}>()
)

export const userStateChanged = createAction(
  USER_STATE_CHANGED,
  props<{user: VerifiedUser | null}>()
);


