import { EntityState, createEntityAdapter, Update, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Exercise } from 'src/app/admin/store/admin.state';
import * as fromCoreActions from './core.actions';
import { ExerciseStatus } from './core.states';


export interface ExerEntityState extends EntityState<Exercise> {
  apiLoading: boolean;
  firstTimeApiLoaded?: boolean;
  exerLastFetchedTime: number;
  currentExercise?: Exercise;
  error: boolean;
  errMsg?: string;
  exerciseByStatusTab: Exercise[]; // for In Progress or Completed table display
  exerciseByStatusType?: ExerciseStatus;
}

export function selectId(i: Exercise) {
  return i.id!;
}
export function comparator(a: Exercise, b: Exercise) {
  if (a.lastUpdated && b.lastUpdated) {
    return a.lastUpdated < b.lastUpdated ? 1 : -1;
  }
  return 1;
}

export const adapter: EntityAdapter<Exercise> = createEntityAdapter<Exercise>({
  selectId: selectId,
  sortComparer: comparator
})

export const inititalState: ExerEntityState = adapter.getInitialState({
  apiLoading: false,
  exerLastFetchedTime: 0,
  currentExercise: undefined,
  error: false,
  errMsg: undefined,
  exerciseByStatusTab: [],
  exerciseByStatusType: undefined
});


export const exerciseEntityReducer = createReducer(
  inititalState,

  on(fromCoreActions.getExerByTypeStart, (state) => {
    return {
      ...state,
      apiLoading: true,
      firstTimeApiLoaded: true
    }
  }),

  on(fromCoreActions.getExerByTypeSuccess, (state, {data, fetchTime, status}) => {
    if (status !== "All") {
      return {
        ...state,
        apiLoading: false,
        exerLastFetchedTime: fetchTime,
        exerciseByStatusTab: data,
        exerciseByStatusType: status
      }
    }
    return adapter.setAll(data, {
      ...state,
      exerLastFetchedTime: fetchTime,
      apiLoading: false,
      exerciseByStatusType: status
    })
  }),

  on(fromCoreActions.getExerByTypeFailed, (state, {errMsg}) => {
    return adapter.removeAll({
      ...state,
      error: false,
      errMsg,
      apiLoading: false
    })
  }),

)

export function exerEntityReducer(state: ExerEntityState | undefined, action: Action) {
  return exerciseEntityReducer(state, action);
}
