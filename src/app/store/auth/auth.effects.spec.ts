import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AuthEffects } from './auth.effects';
import * as fromAuthActions from './auth.actions';
import { cold, hot } from 'jasmine-marbles';
import { VerifiedUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Actions } from '@ngrx/effects';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

describe('Auth Effects test', () => {

  let actions$ = new Observable<any>();
  let aSvc: AuthService;
  let effect: any;

  const fakeUser = new VerifiedUser(111, "FakeUser", "fake@email.com", false, false, null, null,
    undefined, null, null, null, null, []);

  const loginUserSpy = jasmine.createSpyObj({
    loginUser: of(fakeUser)
  })
  const authSvcSpy = jasmine.createSpyObj('AuthService', {
    loginUser: loginUserSpy
  });

  const userSpy = jasmine.createSpyObj({
    loginUser: of(fakeUser)
  })
  const effectSpy = jasmine.createSpyObj('AuthEffects', {
    loginUser2$: userSpy
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: authSvcSpy },
        { provide: AuthEffects, useValue: effectSpy }
      ],
    });

    aSvc = TestBed.inject(AuthService);
    effect = TestBed.inject(AuthEffects);

  });


  it('should have a list method', (done) => {
    effect.loginUser2$().loginUser().subscribe((action: any) => {
      expect(action).toEqual(fakeUser);
      done();
    });
  });

  // it('should have ', (done) => {
  //   effect.loginUser$.loginUser().subscribe((action: any) => {
  //     expect(action).toEqual(fakeUser);
  //     done();
  //   });
  // });

});
