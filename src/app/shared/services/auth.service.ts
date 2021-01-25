import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromAuthActions from '../../store/auth/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

}
