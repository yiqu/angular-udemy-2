import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Exercise } from 'src/app/admin/store/admin.state';


@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  readonly db: firebase.firestore.Firestore = firebase.firestore();
  readonly availableExers: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    = this.db.collection("health").doc("availableExers");
  readonly availableExerList = this.availableExers.collection('list');

  constructor() {
  }

  /**
   * Insert or update exercises based on exer name as doc name id
   * @param exers
   * @returns
   */
  upsertExercises(exers: Exercise[]): Promise<void> {
    const batch = this.db.batch();
    exers.forEach((ex) => {
      const ref = this.availableExerList.doc(ex.name); // name of exercise as doc. name
      batch.set(ref, ex);
    });

    batch.update(this.availableExers, {
      lastUpdated: new Date().getTime()
    });

    return batch.commit();
  }


}
