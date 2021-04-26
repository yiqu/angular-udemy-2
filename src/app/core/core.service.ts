import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Exercise } from '../admin/store/admin.state';
import { AppState } from '../store/global/app.reducer';
import * as fromCoreExerSelectors from './store/core.selectors';
import * as fromCoreActions from './store/core.actions';
import { SelectedExerciseSummary } from './store/core.states';


@Injectable({
  providedIn: 'root'
})
export class CoreExerciseService {

  public isApiFirstLoading$: Observable<boolean> = this.store.select(fromCoreExerSelectors.getFirstApiLoadingStatus);
  public isApiLoading$: Observable<boolean> = this.store.select(fromCoreExerSelectors.getApiLoadingStatus);
  public availableExers$: Observable<Exercise[]> = this.store.select(fromCoreExerSelectors.selectAvailableExers);
  public selectedExerToStart$: Observable<SelectedExerciseSummary | undefined> = this.store.select(fromCoreExerSelectors.getSelectedExerciseToStartById);

  constructor(private store: Store<AppState>) {
  }

  selectExerciseToStart(id: string) {
    this.store.dispatch(fromCoreActions.selectExerciseToStart({exerId: id}));
  }

}
