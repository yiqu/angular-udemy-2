import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, filter, first, map } from 'rxjs/operators';
import { makeAuthstateObservable } from 'src/app/store/auth/auth.utils';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase/app';
import { AppUser } from 'src/app/store/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class LoginPageGuard implements CanActivate {

  constructor(private as: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {
    return this.as.currentUser$.pipe(
      filter((res) => {
        return res !== null;
      }),
      first(),
      map((user: AppUser) => {
        if (user) {
          return this.router.createUrlTree(['/']);;
        } else {
          return true;
        }
      })
    )
  }
}
