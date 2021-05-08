import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public cs: CoreExerciseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cs.getExercisesByStatusType("Started");
  }

  onActionBtnClick(event: TableActionButtonData) {
    switch (event.btnAction) {
      case "Try again": {
        if (event.data) {
          this.router.navigate(['../', event.data.id], {relativeTo: this.route});
        }
        break;
      }
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
