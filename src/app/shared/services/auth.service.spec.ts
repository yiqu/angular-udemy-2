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
    store = TestBed.inject(MockStore);
  });

  it('should use store', () => {
    service = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
    //expect(service.getValue()).toBe('real value');
  });

  it('type should be Store', () => {
    expect(store).toBeInstanceOf(Store);
  });

  it('type should be MockStore', () => {
    expect(store).toBeInstanceOf(MockStore);
  });

  // it('#getValue should return faked value from a fake object', () => {
  //   const fake =  { getValue: () => 'fake value' };
  //   service = new AuthService(fake as Store);
  //   expect(masterService.getValue()).toBe('fake value');
  // });


  it('current user should be undefined',
    (done: DoneFn) => {
      service = TestBed.inject(AuthService);
      service.currentUser$.subscribe(value => {
      expect(value).toBe(undefined);
      done();
    });
  });

});
