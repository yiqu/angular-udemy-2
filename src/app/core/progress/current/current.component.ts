import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Exercise } from 'src/app/admin/store/admin.state';
import { AppState } from 'src/app/store/global/app.reducer';
import { CoreExerciseService } from '../../core.service';
import * as fromRouterSelectors from '../../../store/global/router-store.selectors';


@Component({
  selector: 'app-core-progress-current',
  templateUrl: 'current.component.html',
  styleUrls: ['./current.component.scss']
})
export class ProgressCurrentComponent implements OnInit {

  constructor(public cs: CoreExerciseService, private router: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onStart(exercise: Exercise | undefined) {
    if (exercise) {
      this.cs.saveExericseWithStatus(exercise, "Started");
    }
  }

  onCancel() {
    this.router.navigate(['/', 'home', 'new']);
  }

}
