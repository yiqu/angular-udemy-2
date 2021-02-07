import firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, Observer } from 'rxjs';

/**
 * Convert Firebase's Auth to an Observable
 * @param auth
 */
export function makeAuthstateObservable(): Observable<firebase.User | null> {
  const authState = new Observable((observer: Observer<firebase.User | null | undefined>) => {
    firebase.auth().onAuthStateChanged(
      (user?: firebase.User | null) => observer.next(user),
      (error: firebase.auth.Error) => observer.error(error),
      () => observer.complete()
    );
  });
  return authState;
}
