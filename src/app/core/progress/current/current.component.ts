import { Component, OnInit } from '@angular/core';
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

}
