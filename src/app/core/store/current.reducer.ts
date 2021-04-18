import { createAction, Action, on, createReducer } from "@ngrx/store"
import { ExerciseState } from "./core.states";
import * as fromCoreActions from './core.actions';

const initialState: ExerciseState = {
  selectedExerciseIdToStart: undefined
}

export const exerciseReducer = createReducer(
  initialState,

  on(fromCoreActions.selectExerciseToStart, (state, {exerId}) => {
    return {
      ...state,
      selectedExerciseIdToStart: exerId
    }
  })
)
