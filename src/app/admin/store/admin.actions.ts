import { createAction, props } from '@ngrx/store';
import { AdminNewExerSubMenu, Exercise } from './admin.state';

const ADMIN_PAGE_NAVIGATION: string = "[Admin/UI] Admin page navigation";
const ADD_NEW_EXER: string = "[Admin/UI] Add a new exer select click";
const SAVE_BTN_CLICK: string = "[Admin/UI] Save exer button click";
const SET_FORM_VALID_STATUS: string = "[Admin/UI] Set form valid status";
const RESET_NEW_EXER_OPTIONS = "[Admin/UI] Reset all options in new exer";

const SAVE_ALL_EXER_START: string = "[Admin/API] Save all exer start";
const SAVE_ALL_EXER_SUCCESS: string = "[Admin/API] Save all exer success";
const SAVE_ALL_EXER_FAILURE: string = "[Admin/API] Save all exer failed";

const GET_ALL_EXER_START: string = "[Admin/API] Get all exer start";
const GET_ALL_EXER_SUCCESS: string = "[Admin/API] Get all exer success";
const GET_ALL_EXER_FAILURE: string = "[Admin/API] Get all exer failed";

const DELETE_ALL_EXER_START: string = "[Admin/API] delete all exer start";

export const onAdminPageNavigation = createAction(
  ADMIN_PAGE_NAVIGATION,
  props<{page: string | null}>()
);

export const onAddAnotherExer = createAction(
  ADD_NEW_EXER,
  props<{exerUnitType: AdminNewExerSubMenu | undefined}>()
);

export const onSaveNewExerBtnClick = createAction(
  SAVE_BTN_CLICK,
  props<{timeStamp: number | undefined}>()
);

export const setFormValidStatus = createAction(
  SET_FORM_VALID_STATUS,
  props<{status: boolean}>()
)

export const resetNewExerOptions = createAction(
  RESET_NEW_EXER_OPTIONS,
)

export const saveAllExerStart = createAction(
  SAVE_ALL_EXER_START,
  props<{exers: Exercise[]}>()
)

export const saveAllExerSuccess = createAction(
  SAVE_ALL_EXER_SUCCESS,

)

export const saveAllExerFailure = createAction(
  SAVE_ALL_EXER_FAILURE,
  props<{errMsg: string}>()
)

export const getAllExerStart = createAction(
  GET_ALL_EXER_START
)

export const getAllExerSuccess = createAction(
  GET_ALL_EXER_SUCCESS,
  props<{exers: Exercise[]}>()
)

export const getAllExerFailure = createAction(
  GET_ALL_EXER_FAILURE,
  props<{errMsg: string}>()
)
