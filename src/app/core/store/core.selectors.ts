import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Exercise } from "src/app/admin/store/admin.state";
import { ExerEntityState } from "./core.reducer";
import * as fromCoreReducer from './core.reducer';
import { Dictionary } from "@ngrx/entity";
import { ExerciseState, SelectedExerciseSummary } from "./core.states";


export const selectCoreExerFeatureState = createFeatureSelector<ExerEntityState>("exerciseCore");
export const selectExerFeatureState = createFeatureSelector<ExerciseState>("exercise");

export const selectAvailableExerIds = createSelector(
  selectCoreExerFeatureState,
  fromCoreReducer.adapter.getSelectors().selectIds
);

export const selectAvailableExerEntities = createSelector(
  selectCoreExerFeatureState,
  fromCoreReducer.adapter.getSelectors().selectEntities
);

export const selectAvailableExers = createSelector(
  selectCoreExerFeatureState,
  fromCoreReducer.adapter.getSelectors().selectAll
);

export const selectAvailableExerCount = createSelector(
  selectCoreExerFeatureState,
  fromCoreReducer.adapter.getSelectors().selectTotal
);

export const getFirstApiLoadingStatus = createSelector(
  selectCoreExerFeatureState,
  (state): boolean => {
    return state.apiLoading || !(!!state.firstTimeApiLoaded);
  }
);

export const getApiLoadingStatus = createSelector(
  selectCoreExerFeatureState,
  (state): boolean => {
    return state.apiLoading;
  }
);

export const getExerciseById2 = (id: string) => createSelector(
  selectAvailableExerEntities,
  (state): Exercise | undefined => {
    return id ? state[id] : undefined;
  }
);

export const getSelectedExerciseToStartId = createSelector(
  selectExerFeatureState,
  (state): string | undefined => {
    return state.selectedExerciseIdToStart;
  }
);

export const getSelectedExerciseToStartById = createSelector(
  selectAvailableExerEntities,
  getSelectedExerciseToStartId,
  (state: Dictionary<Exercise>, id: string | undefined): SelectedExerciseSummary | undefined => {

    if (state && Object.keys(state).length > 0 && id) {
      const selectedExer: Exercise | undefined = state[id];
      const name: string = 'Great choice! You have selected ' +  selectedExer?.name + '!';
      const typeDescription = 'This is a ' + (selectedExer?.setUnitTypeIsTime ? 'timed' : 'repetition count') + ' exercise.';
      const details = {
        setCount: selectedExer?.sets,
        duration: selectedExer?.countPerSet,
        time: selectedExer?.setUnitTypeIsTime
      }
      return {
        name,
        typeDescription,
        details
      };
    }
    return undefined;
  }
);
