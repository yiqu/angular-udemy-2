import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Exercise } from '../admin/store/admin.state';
import { AppState } from '../store/global/app.reducer';
import * as fromCoreExerSelectors from './store/core.selectors';


@Injectable({
  providedIn: 'root'
})
export class CoreExerciseService {

  public isApiLoading$: Observable<boolean> = this.store.select(fromCoreExerSelectors.getApiLoadingStatus);
  public availableExers$: Observable<Exercise[]> = this.store.select(fromCoreExerSelectors.selectAvailableExers);

  constructor(private store: Store<AppState>) {
  }

}
