import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { TableActionButtonData } from 'src/app/shared/models/general.model';
import { CoreExerciseService } from '../core.service';

@Component({
  selector: 'app-core-completed',
  templateUrl: 'completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedTrainingComponent implements OnInit {

  compDest$: Subject<void> = new Subject<void>();

  constructor(public cs: CoreExerciseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cs.getExercisesByStatusType("Completed");
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
