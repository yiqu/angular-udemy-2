import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Exercise } from 'src/app/admin/store/admin.state';
import { ExerciseStatus } from './core.states';


const GET_ALL_EXER_START: string = "[Exercise/API] Load all user's exercises start";
const GET_ALL_EXER_SUCCESS: string = "[Exercise/API] Load all user's exercises success";
const GET_ALL_EXER_FAILED: string = "[Exercise/API] Load all user's exercises failed";

const SAVE_EXER_START: string = "[Exercise/API] Save exercise and status start";
const SAVE_EXER_SUCCESS: string = "[Exercise/API] Save exercise and status success";
const SAVE_EXER_FAILED: string = "[Exercise/API] Save exercise and status failed";

const SELECT_EXER_TO_START: string = "[Exercise/UI] Start exercise to start";

export const getAllExerStart = createAction(
  GET_ALL_EXER_START
)

export const getAllExerSuccess = createAction(
  GET_ALL_EXER_SUCCESS,
  props<{data: Exercise[], fetchTime: number}>()
)

export const getAllExerFailed = createAction(
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
