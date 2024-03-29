import { createAction, Action, on, createReducer } from "@ngrx/store"
import { ExerciseState } from "./core.states";
import * as fromCoreActions from './core.actions';

const initialState: ExerciseState = {
  recentSelectedExerciseIdToStart: undefined, // SYNC'd in local storage
  exerciseInProgress: undefined,
  exerciseInProgressSaveCompleted: undefined
}

export const exerciseReducer = createReducer(
  initialState,

  on(fromCoreActions.selectExerciseToStart, (state, {exerId}) => {
    return {
      ...state,
      recentSelectedExerciseIdToStart: exerId, // SYNC'd in local storage
      exerciseInProgressSaveCompleted: false
    }
  }),

  on(fromCoreActions.saveExerciseAndStatusStart, (state, {data, status, date}) => {
    return {
      ...state,
      exerciseInProgress: data,
      exerciseInProgressSaveCompleted: false
    }
  }),

  on(fromCoreActions.saveExerciseAndStatusSuccess, (state, {data}) => {
    return {
      ...state,
      exerciseInProgress: data,
      exerciseInProgressSaveCompleted: true
    }
  }),

  on(fromCoreActions.saveExerciseAndStatusFailure, (state, {errMsg}) => {
    return {
      ...state,
      exerciseInProgress: undefined,
      exerciseInProgressSaveCompleted: false
    }
  }),

  on(fromCoreActions.selectExerciseGaveup, (state, {data}) => {
    return {
      ...state,
      exerciseInProgress: undefined
    }
  }),

  on(fromCoreActions.setExerciseInProgress, (state, {data}) => {
    return {
      ...state,
      exerciseInProgress: data,
    }
  }),

)
