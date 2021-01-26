import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromAuthActions from '../../store/auth/auth.actions';
import { VerifiedUser } from '../models/user.model';
import * as fromAuthSelectors from '../../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Observable<VerifiedUser | undefined> = this.store.select(fromAuthSelectors.getCurrentUser);
  currentUserLogo$ : Observable<string> = this.store.select(fromAuthSelectors.getTopNavUserLogo);

  constructor(private store: Store<AppState>) {

  }

  onSignUp(email: string, pw: string) {
    if (email && pw) {
      this.store.dispatch(fromAuthActions.userRegisterStart({name: email, password: pw}));
    }
  }

  onSignout() {
    this.store.dispatch(fromAuthActions.userLogoutStart());
  }

  onSignin(email: string, pw: string) {
    this.store.dispatch(fromAuthActions.userLoginStart({name: email, password: pw}));
  }

}
