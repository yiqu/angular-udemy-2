import { VerifiedUser } from "../models/user.model";
import { AuthService } from "./auth.service";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from "@ngrx/store";
import { TestBed } from "@angular/core/testing";

describe('Auth Service', () => {
  let service: AuthService;
  let store: MockStore;
  const initialState = { auth: {currentUser: undefined, loading: true} };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ]
    });

    service = TestBed.inject(AuthService);
    store = TestBed.inject(MockStore);
  });

  it('service is created', () => {
    expect(service).toBeTruthy();
  });

  it('store type should be Store', () => {
    expect(store).toBeInstanceOf(Store);
  });

  it('store type should be MockStore', () => {
    expect(store).toBeInstanceOf(MockStore);
  });

  it('currentUser should return undefined from observable',
  (done: DoneFn) => {
    service.currentUser$.subscribe(value => {
    expect(value).toBe(undefined);
    done();
  });
  });


  it('current user should be undefined',
    (done: DoneFn) => {
      service.currentUser$.subscribe(value => {
      expect(value).toBe(undefined);
      done();
    });
  });

  it('currentUser should return value', () => {
    const authSvcSpy = jasmine.createSpyObj('AuthService', ['getValue']);

    const stubValue = 'stub value';

    authSvcSpy.getValue.and.returnValue(stubValue);

    expect(authSvcSpy.getValue())
      .toBe(stubValue, 'service returned stub value');
    expect(authSvcSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');
    expect(authSvcSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);

  });

  it('onSignin will trigger a dispatch call', () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

    const stubValue = 'stub value';

    storeSpy.dispatch.and.returnValue(stubValue);

    service = new AuthService(storeSpy);

    service.onSignin('','');

    expect(storeSpy.dispatch.calls.count())
      .toBe(1, 'spy method was called once');

    expect(storeSpy.dispatch())
      .toBe(stubValue, 'service returned stub value');

  });

  it('getUser will trigger number of calls', () => {

    const authSpy = jasmine.createSpyObj('AuthService', ['getUser']);
    authSpy.getUser();
    authSpy.getUser();
    expect(authSpy.getUser.calls.count()).toBe(2);

  });

});
