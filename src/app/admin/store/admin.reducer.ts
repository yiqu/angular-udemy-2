import { Action, createReducer, on } from '@ngrx/store';
import * as fromAdminActions from './admin.actions';
import { AdminState } from './admin.state';

export const inititalState: AdminState = {
  currentActionPage: null
}

export const adminStateReducer = createReducer(
  inititalState,

  on(fromAdminActions.onAdminPageNavigation, (state, {page}) => {
    return {
      ...state,
      currentActionPage: page
    }
  }),


)


export function iAdminStateReducer(state: AdminState | undefined, action: Action) {
  return adminStateReducer(state, action);
}
