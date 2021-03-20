import { Action, createReducer, on } from '@ngrx/store';
import * as fromAdminActions from './admin.actions';
import { AdminState } from './admin.state';

export const inititalState: AdminState = {
  currentActionPage: null,
  loading: false,
  allExers: []
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
  }),

  on(fromAdminActions.saveAllExerStart, (state, {exers}) => {
    return {
      ...state,
      exersBeingAdded: [...exers],
      loading: true
    }
  }),

  on(fromAdminActions.saveAllExerSuccess, (state) => {
    return {
      ...state,
      loading: false,
      errMsg: undefined,
      error: false
    }
  }),

  on(fromAdminActions.saveAllExerFailure, (state, {errMsg}) => {
    return {
      ...state,
      loading: false,
      errMsg: errMsg,
      error: true
    }
  }),

  on(fromAdminActions.getAllExerStart, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(fromAdminActions.getAllExerSuccess, (state, {exers}) => {
    return {
      ...state,
      loading: false,
      errMsg: undefined,
      error: false,
      allExers: exers
    }
  }),

  on(fromAdminActions.getAllExerFailure, (state, {errMsg}) => {
    return {
      ...state,
      loading: false,
      errMsg: errMsg,
      error: true
    }
  }),

  on(fromAdminActions.updateExerStart, (state, {exer}) => {
    return {
      ...state,
      exerBeingUpdated: exer
    }
  }),

  on(fromAdminActions.updateExerSuccess, (state, {exer}) => {
    return {
      ...state,
      errMsg: undefined,
      error: false,
      exerBeingUpdated: exer
    }
  }),

  on(fromAdminActions.updateExerFailed, (state, {errMsg}) => {
    return {
      ...state,
      errMsg: errMsg,
      error: true
    }
  }),

  on(fromAdminActions.deleteExerStart, (state, {exers}) => {
    return {
      ...state
    }
  }),

  on(fromAdminActions.deleteExerSuccess, (state, {exers}) => {
    return {
      ...state,
      errMsg: undefined,
      error: false
    }
  }),

  on(fromAdminActions.deleteExerFailed, (state, {errMsg}) => {
    return {
      ...state,
      errMsg: errMsg,
      error: true
    }
  }),


)
