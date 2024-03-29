import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Exercise } from "src/app/admin/store/admin.state";
import { ExerEntityState } from "./core.reducer";
import * as fromCoreReducer from './core.reducer';
import { Dictionary } from "@ngrx/entity";
import { ExerciseState, ExerciseStatus, SelectedExerciseSummary } from "./core.states";
import { MatSortable } from "@angular/material/sort";
import * as fromRouterSelectors from '../../store/global/router-store.selectors';

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

export const getLastSelectedExerId = createSelector(
  selectExerFeatureState,
  (state): string | undefined => {
    return state.recentSelectedExerciseIdToStart;
  }
);

export const getLastSelectedExer = createSelector(
  selectAvailableExerEntities,
  getLastSelectedExerId,
  (state, id: string | undefined): Exercise | undefined => {
    if (state && Object.keys(state).length > 0 && id) {
      return state[id];
    }
    return undefined;
  }
)

export const getSelectedExerciseToStartById = createSelector(
  selectAvailableExerEntities,
  fromRouterSelectors.selectRouteParam('exerId'),
  fromRouterSelectors.selectQueryParam('inProgressId'),
  (state: Dictionary<Exercise>, id?: string, inProgressId?: string): SelectedExerciseSummary | undefined => {

    if (state && Object.keys(state).length > 0 && id) {
      let selectedExer: Exercise | undefined = state[id];
      if (!selectedExer) {
        return undefined;
      }
      if (inProgressId) {
        selectedExer = {
          ...selectedExer,
          inProgressId
        }
      }
      const name: string = selectedExer?.name + '';
      const typeDescription = 'This is a ' + (selectedExer?.setUnitTypeIsTime ? 'timed' : 'repetition count') + ' exercise.';
      const details = {
        setCount: selectedExer?.sets,
        duration: selectedExer?.countPerSet,
        time: selectedExer?.setUnitTypeIsTime
      }
      return {
        name,
        typeDescription,
        details,
        exercise: selectedExer
      };
    }
    return undefined;
  }
);

export const getCurrentTypeByStatusTab = createSelector(
  selectCoreExerFeatureState,
  (state): ExerciseStatus | undefined => {
    return state.exerciseByStatusType;
  }
);

export const getCurrentExercisesByStatusTab = createSelector(
  selectCoreExerFeatureState,
  (state): Exercise[] => {
    return state.exerciseByStatusTab;
  }
);

export const getCurrentExercisesByStatusTabTableData = createSelector(
  getCurrentExercisesByStatusTab,
  (state) => {
    const columnIds: string[] = ['progressStatus', 'name', 'sets', 'countPerSet', 'setUnitTypeIsTime',
      'progressLastUpdated'];
    const dataSource = state;
    return {
      columnIds,
      dataSource,
      initSort: {
        id: 'progressLastUpdated',
        start: 'desc'
      } as MatSortable
    }
  }
);

export const getExerciseInProgress = createSelector(
  selectExerFeatureState,
  (state): Exercise | undefined => {
    return state.exerciseInProgress;
  }
);
