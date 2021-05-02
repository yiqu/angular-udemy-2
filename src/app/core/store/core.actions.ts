import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Exercise } from 'src/app/admin/store/admin.state';
import { ExerciseStatus } from './core.states';


const GET_ALL_EXER_START: string = "[Exercise/API] Load all user's exercises by type start";
const GET_ALL_EXER_SUCCESS: string = "[Exercise/API] Load all user's exercises by type success";
const GET_ALL_EXER_FAILED: string = "[Exercise/API] Load all user's exercises by type failed";

const SAVE_EXER_START: string = "[Exercise/API] Save exercise and status start";
const SAVE_EXER_SUCCESS: string = "[Exercise/API] Save exercise and status success";
const SAVE_EXER_FAILED: string = "[Exercise/API] Save exercise and status failed";

const SELECT_EXER_TO_START: string = "[Exercise/UI] Start exercise to start";

export const getExerByTypeStart = createAction(
  GET_ALL_EXER_START,
  props<{status:  ExerciseStatus}>()
)

export const getExerByTypeSuccess = createAction(
  GET_ALL_EXER_SUCCESS,
  props<{data: Exercise[], fetchTime: number, status:  ExerciseStatus}>()
)

export const getExerByTypeFailed = createAction(
  GET_ALL_EXER_FAILED,
  props<{errMsg: string}>()
)

export const selectExerciseToStart = createAction(
  SELECT_EXER_TO_START,
  props<{exerId: string}>()
)

export const saveExerciseAndStatusStart = createAction(
  SAVE_EXER_START,
  props<{data: Exercise, status: ExerciseStatus, date: number}>()
)

export const saveExerciseAndStatusSuccess = createAction(
  SAVE_EXER_SUCCESS,
  props<{data: Exercise}>()
)

export const saveExerciseAndStatusFailure = createAction(
  SAVE_EXER_FAILED,
  props<{errMsg: string}>()
)
