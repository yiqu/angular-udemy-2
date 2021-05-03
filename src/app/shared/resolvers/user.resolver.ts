import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AppUser } from 'src/app/store/auth/auth.state';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserResolver implements Resolve<AppUser> {
  constructor(private as: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.as.currentUser$.pipe(
      take(1),
      tap((res) => {
        console.log('resolver user: ', res?.email)
      })
    );
  }
}


/**
 * Resolver based on route params
 */
// @Injectable()
// export class APIResolver implements Resolve<any> {
//   constructor(private apiService: APIService) {}

//   resolve(route: ActivatedRouteSnapshot) {
//     return this.apiService.getItems(route.params.date);
//   }
// }
