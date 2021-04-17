import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromAuthActions from '../../store/auth/auth.actions';
import { VerifiedUser } from '../models/user.model';
import * as fromAuthSelectors from '../../store/auth/auth.selectors';
import { Router } from '@angular/router';
import { AppUser, ErrorInfo } from 'src/app/store/auth/auth.state';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: Observable<AppUser> = this.store.select(fromAuthSelectors.getCurrentUser).pipe(
    filter((user: AppUser) =>  user !== null)
  );
  currentUserLogo$: Observable<string> = this.store.select(fromAuthSelectors.getTopNavUserLogo);
  authError$: Observable<ErrorInfo> = this.store.select(fromAuthSelectors.getError);

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

  navigateToPath(path?: string) {
    let result: string[] = [];
    if (path) {
      result = path.split("/");
    }
    this.router.navigate(['/', ...result]);
  }

  resetAuthErrorState() {
    this.store.dispatch(fromAuthActions.resetAuthError());
  }

}
