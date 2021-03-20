import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { EMPTY } from 'rxjs';
import { Exercise } from 'src/app/admin/store/admin.state';


@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  readonly db: firebase.firestore.Firestore = firebase.firestore();
  readonly availableExers: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    = this.db.collection("health").doc("availableExers");
  readonly availableExerCollection = this.availableExers.collection('list');

  constructor(private router: Router, private route: ActivatedRoute) {
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

    batch.update(this.availableExers, {
      lastUpdated: new Date().getTime()
    });

    return batch.commit();
  }

  getExercises(): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
    const ref = this.availableExerCollection;
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
      console.log(ex.id)
      const ref = this.availableExerCollection.doc(ex.id);
      batch.delete(ref);
    });

    batch.update(this.availableExers, {
      lastUpdated: new Date().getTime()
    });

    return batch.commit();
  }


  convertCollectionDocData<T>(res: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>): T[] {
    let result: T[] = [];
    if (res && res.size > 0) {
      res.forEach((res) => {
        result.push({
          ...res.data(),
          id: res.id
        } as unknown as T)
      });
    }
    return result;
  }

  navigatePath(path: string[]): void {
    this.router.navigate([...path]);
  }


}
