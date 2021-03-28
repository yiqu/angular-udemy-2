import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Exercise } from 'src/app/admin/store/admin.state';


const GET_ALL_EXER_START: string = "[Exercise/API] Load all user's exercises start";
const GET_ALL_EXER_SUCCESS: string = "[Exercise/API] Load all user's exercises success";
const GET_ALL_EXER_FAILED: string = "[Exercise/API] Load all user's exercises failed";

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
