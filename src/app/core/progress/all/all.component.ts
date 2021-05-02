import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableActionButtonData } from 'src/app/shared/models/general.model';
import { CoreExerciseService } from '../../core.service';

@Component({
  selector: 'app-core-progress-all',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.scss']
})
export class ProgressAllComponent implements OnInit, OnDestroy {

  compDest$: Subject<void> = new Subject<void>();

  constructor(public cs: CoreExerciseService) {
  }

  ngOnInit() {
    this.cs.getExercisesByStatusType("Started");
  }

  onActionBtnClick(event: TableActionButtonData) {
    console.log(event)
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
