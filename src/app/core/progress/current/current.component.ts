import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/admin/store/admin.state';
import { CoreExerciseService } from '../../core.service';

@Component({
  selector: 'app-core-progress-current',
  templateUrl: 'current.component.html',
  styleUrls: ['./current.component.scss']
})
export class ProgressCurrentComponent implements OnInit {

  constructor(public cs: CoreExerciseService) {
  }

  ngOnInit() {
  }

  onStart(exercise: Exercise | undefined) {
    if (exercise) {
      this.cs.saveExericseWithStatus(exercise, "Started");
    }
  }

  onCancel() {

  }

}
