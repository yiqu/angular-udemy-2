import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Exercise } from '../admin/store/admin.state';
import { AppState } from '../store/global/app.reducer';
import * as fromCoreExerSelectors from './store/core.selectors';
import * as fromCoreActions from './store/core.actions';
import { ExerciseStatus, SelectedExerciseSummary } from './store/core.states';
import { FirebaseApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CoreExerciseService {

  public isApiFirstLoading$: Observable<boolean> = this.store.select(fromCoreExerSelectors.getFirstApiLoadingStatus);
  public isApiLoading$: Observable<boolean> = this.store.select(fromCoreExerSelectors.getApiLoadingStatus);
  public availableExers$: Observable<Exercise[]> = this.store.select(fromCoreExerSelectors.selectAvailableExers);
  public selectedExerToStart$: Observable<SelectedExerciseSummary | undefined> = this.store.select(fromCoreExerSelectors.getSelectedExerciseToStartById);
  public currentExercisesByStatusTabTableData$ = this.store.select(fromCoreExerSelectors.getCurrentExercisesByStatusTabTableData);

  constructor(private store: Store<AppState>, private as: FirebaseApiService) {
  }

  selectExerciseToStart(id: string) {
    this.store.dispatch(fromCoreActions.selectExerciseToStart({exerId: id}));
  }

  saveExericseWithStatus(exer: Exercise, status: ExerciseStatus) {
    const date = new Date().getTime();
    this.store.dispatch(fromCoreActions.saveExerciseAndStatusStart({data: exer, status, date}));
  }

  getExercisesByStatusType(status: ExerciseStatus) {
    this.store.dispatch(fromCoreActions.getExerByTypeStart({status}));
  }

}
