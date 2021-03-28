import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Exercise } from "src/app/admin/store/admin.state";
import { ExerEntityState } from "./core.reducer";
import * as fromCoreReducer from './core.reducer';


export const selectCoreExerFeatureState = createFeatureSelector<ExerEntityState>("exerciseCore");

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

export const getApiLoadingStatus = createSelector(
  selectCoreExerFeatureState,
  (state): boolean => {
    return state.apiLoading || !(!!state.firstTimeApiLoaded);
  }
);


