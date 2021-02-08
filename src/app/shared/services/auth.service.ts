import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromAuthActions from '../../store/auth/auth.actions';
import { VerifiedUser } from '../models/user.model';
import * as fromAuthSelectors from '../../store/auth/auth.selectors';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Observable<VerifiedUser | null> = this.store.select(fromAuthSelectors.getCurrentUser);
  currentUserLogo$ : Observable<string> = this.store.select(fromAuthSelectors.getTopNavUserLogo);

  constructor(private store: Store<AppState>, private router: Router) {

  }

  getUser(): VerifiedUser | null {
    return null;
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

  loginUser(): Observable<any> {
    return of(undefined);
  }

  navigateToPath(path: string) {
    const pathToNav = path.split("/");
    this.router.navigate(['/', ...pathToNav]);
  }

}
