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

  on(fromAdminActions.onAddAnotherExer, (state, {exerUnitType}) => {
    return {
      ...state,
      newExerType: {
        name: exerUnitType
      }
    }
  }),

  on(fromAdminActions.onSaveNewExerBtnClick, (state, {timeStamp}) => {
    return {
      ...state,
      saveNewExerBtnClickTimeStamp: timeStamp
    }
  }),

  on(fromAdminActions.setFormValidStatus, (state, {status}) => {
    return {
      ...state,
      formValidState: status
    }
  }),

  on(fromAdminActions.resetNewExerOptions, (state) => {
    return {
      ...state,
      saveNewExerBtnClickTimeStamp: undefined,
      newExerType: undefined,
      formValidState: true
    }
  })


)


export function iAdminStateReducer(state: AdminState | undefined, action: Action) {
  return adminStateReducer(state, action);
}
