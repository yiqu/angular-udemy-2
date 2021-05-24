import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { EMPTY } from 'rxjs';
import { Exercise } from 'src/app/admin/store/admin.state';
import { ExerciseStatus } from 'src/app/core/store/core.states';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromAuthSelectors from '../../store/auth/auth.selectors';
import { AuthService } from './auth.service';

const NO_LOGIN_USER: string = 'NO_LOGIN_USER';

/**
 * Firebase API Service
 *
 * User Exercise Storage Structure:
 * health (collection) -> users (doc) -> userName (collection) -> availableExers (doc) -> exers (collection) -> exerId (doc)
 *
 *
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {


  private currentUserEmail: string = NO_LOGIN_USER;
  readonly db: firebase.firestore.Firestore = firebase.firestore();
  private availableExers!: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
  private availableExerCollection!: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  private userInProgressExers!: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
  public userInProgressCollection!: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  private userCompletedExers!: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
  public userCompletedCollection!: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  constructor(private router: Router, private route: ActivatedRoute, private as: AuthService) {

    this.assignUserExerciseFirebase();

    this.as.currentUser$.subscribe(
      (res) => {
        if (res && res.email) {
          this.currentUserEmail = res.email;
        } else {
          this.currentUserEmail = NO_LOGIN_USER;
        }
        this.assignUserExerciseFirebase();
      }
    );
  }

  /**
   * Get the Available Exercise document for a user
   * @param userEmail
   */
  private getAvailableExerDoc(userEmail: string): firebase.firestore.DocumentReference<firebase.firestore.DocumentData> {
    return this.db.collection("health").doc('users').collection(userEmail).doc('availableExers');
  }

  private getUserInProgressExerDoc(userEmail: string): firebase.firestore.DocumentReference<firebase.firestore.DocumentData> {
    return this.db.collection("health").doc('users').collection(userEmail).doc('exerInProgress');
  }

  private getUserCompletedExerDoc(userEmail: string): firebase.firestore.DocumentReference<firebase.firestore.DocumentData> {
    return this.db.collection("health").doc('users').collection(userEmail).doc('exerCompleted');
  }

  assignUserExerciseFirebase() {
    this.availableExers = this.getAvailableExerDoc(this.currentUserEmail);
    this.availableExerCollection = this.availableExers.collection('list');

    this.userInProgressExers = this.getUserInProgressExerDoc(this.currentUserEmail);
    this.userInProgressCollection = this.userInProgressExers.collection('list');

    this.userCompletedExers = this.getUserCompletedExerDoc(this.currentUserEmail);
    this.userCompletedCollection = this.userCompletedExers.collection('list');
  }

  /**
   * Insert or update exercises based on exer name as doc name id
   * @param exers
   * @returns
   */
  upsertExercises(exers: Exercise[]): Promise<void> {
    const batch = this.db.batch();
    const time: number = new Date().getTime();
    exers.forEach((ex) => {
      const ref: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> =
        this.availableExerCollection.doc();

      batch.set(ref, {
        ...ex,
        created: time,
        lastUpdated: time
      });
    });

    batch.set(this.availableExers, {
      lastUpdated: new Date().getTime()
    });

    return batch.commit();
  }

  getExercises(exerStatus: ExerciseStatus): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
    let ref = this.availableExerCollection;
    switch (exerStatus) {
      case "All" : {
        ref = this.availableExerCollection;
        break;
      }
      case "Started" : {
        ref = this.userInProgressCollection;
        break;
      }
      case "Completed" : {
        ref = this.userCompletedCollection;
        break;
      }
    }
    return ref.get();
  }

  updateExercise(exer: Exercise): Promise<void> {
    if (exer.id) {
      const ref = this.availableExerCollection.doc(exer.id);
      const time: number = new Date().getTime();
      return ref.update({
        ...exer,
        lastUpdated: time
      });
    }
    return Promise.resolve();
  }

  deleteExercise(exer: Exercise): Promise<void> {
    if (exer.id) {
      const ref = this.availableExerCollection.doc(exer.id);
      return ref.delete();
    }
    return Promise.resolve();
  }

  deleteExercises(exers: Exercise[]): Promise<void> {
    const batch = this.db.batch();
    exers.forEach((ex) => {
      const ref = this.availableExerCollection.doc(ex.id);
      batch.delete(ref);
    });

    batch.update(this.availableExers, {
      lastUpdated: new Date().getTime()
    });

    return batch.commit();
  }


  /**
   * Convert firebase response to Array<T>
   * @param res firebase response
   * @param idIdentiferName the actual id identifier to set as the id property. Use this when the "id" property
   *         is part of the data stored in the db. If this does not exist, use the Firebase id key (key of the array)
   *
   * @returns
   */
  convertCollectionDocData<T>(res: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
    idIdentifierName = 'id'): T[] {
      let result: T[] = [];
      if (res && res.size > 0) {
        res.forEach((res) => {
          result.push({
            ...res.data(),
            id: res.get(idIdentifierName) ? res.get(idIdentifierName) : res.id // use a property in the db as the id
          } as unknown as T)
        });
      }
      return result;
  }

  navigatePath(path: string[]): void {
    this.router.navigate([...path]);
  }

  saveExerciseWithState(exer: Exercise, status: ExerciseStatus, date: number, id?: string): Promise<void> {
    if (id && exer) {
      let saveRef;
      const exerToSave: Exercise = {
        ...exer,
        progressStatus: status,
        progressLastUpdated: date
      }
      if (status === "Started") {
        saveRef = this.userInProgressCollection.doc(id);
      } else if (status === "Completed") {
        saveRef = this.userCompletedCollection.doc(id);
      }

      if (saveRef) {
        return saveRef.set(exerToSave);
      }
    }

    return Promise.resolve();
  }

  removeExerciseByStatus(status: ExerciseStatus, id: string): Promise<void> {
    if (id) {
      let saveRef = undefined;
      if (status === "Started") {
        saveRef = this.userInProgressCollection.doc(id);
      } else if (status === "Completed") {
        saveRef = this.userCompletedCollection.doc(id);
      }

      if (saveRef) {
        return saveRef.delete();
      }
    }
    return Promise.resolve();
  }


}
