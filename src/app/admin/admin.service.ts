import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../store/global/app.reducer';
import * as fromAdminActions from './store/admin.actions';
import * as fromAdminSelectors from './store/admin.selectors';
import { AdminNewExerSubMenu, Exercise, NewExerUnitType, PanelButtonType } from './store/admin.state';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public currentSelectedPage$: Observable<string | null> = this.store.select(fromAdminSelectors.getCurrentPage);
  public adminPanelButtons$: Observable<PanelButtonType[]> = this.store.select(fromAdminSelectors.getAdminPanelButtons);
  public newlyAddedExerType$: Observable<NewExerUnitType | undefined> = this.store.select(fromAdminSelectors.getNewlyAddedExerType);
  public onNewExerSaveClick$: Observable<number | undefined> = this.store.select(fromAdminSelectors.getSaveExerBtnClicked);
  public exerFormStatus$: Observable<boolean | undefined> = this.store.select(fromAdminSelectors.getFormErrorState).pipe(
    filter((status) => status != undefined)
  );
  public isLoading$: Observable<boolean> = this.store.select(fromAdminSelectors.getIsLoadingState);

  constructor(private store: Store<AppState>) {

  }

  setCurrentPageState(page: string | null) {
    this.store.dispatch(fromAdminActions.onAdminPageNavigation({page}));
  }

  addNewExer(exerType: AdminNewExerSubMenu | undefined) {
    this.store.dispatch(fromAdminActions.onAddAnotherExer({exerUnitType: exerType}));
  }

  onNewExerSaveClick() {
    const ts = new Date().getTime();
    this.store.dispatch(fromAdminActions.onSaveNewExerBtnClick({timeStamp: ts}));
  }

  onSetFormValidStatus(status: boolean) {
    this.store.dispatch(fromAdminActions.setFormValidStatus({status}));
  }

  resetNewExer() {
    this.store.dispatch(fromAdminActions.resetNewExerOptions());
  }

  onSaveExers(exers: Exercise[]) {
    this.store.dispatch(fromAdminActions.saveAllExerStart({exers}));
  }

}
