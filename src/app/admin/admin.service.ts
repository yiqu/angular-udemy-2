import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/global/app.reducer';
import * as fromAdminActions from './store/admin.actions';
import * as fromAdminSelectors from './store/admin.selectors';
import { PanelButtonType } from './store/admin.state';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public currentSelectedPage$: Observable<string | null> = this.store.select(fromAdminSelectors.getCurrentPage);
  public adminPanelButtons$: Observable<PanelButtonType[]> = this.store.select(fromAdminSelectors.getAdminPanelButtons);

  constructor(private store: Store<AppState>) {

  }

  setCurrentPageState(page: string | null) {
    this.store.dispatch(fromAdminActions.onAdminPageNavigation({page}));
  }

}
