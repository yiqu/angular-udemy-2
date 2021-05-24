import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Exercise } from 'src/app/admin/store/admin.state';
import { AppState } from 'src/app/store/global/app.reducer';
import { CoreExerciseService } from '../../core.service';
import * as fromRouterSelectors from '../../../store/global/router-store.selectors';
import { ACTION_GIVEUP } from './counter/counter.component';
import { DialogConfirmService } from 'src/app/shared/services/confirm.service';
import { take } from 'rxjs/operators';
import { ToasterService } from 'src/app/shared/services/toaster.service';


@Component({
  selector: 'app-core-progress-current',
  templateUrl: 'current.component.html',
  styleUrls: ['./current.component.scss']
})
export class ProgressCurrentComponent implements OnInit, OnDestroy {

  exerInProgress: boolean = false;

  constructor(public cs: CoreExerciseService, private router: Router, private store: Store<AppState>,
    public ts: ToasterService) {
  }

  ngOnInit() {
  }

  onStart(exercise: Exercise | undefined) {
    if (exercise) {
      this.cs.saveExericseWithStatus(exercise, "Started");
      this.exerInProgress = true;
    }
  }

  onCancel() {
    this.router.navigate(['/', 'home', 'new']);
  }

  onActionClick(action: string) {
    if (action === ACTION_GIVEUP) {
      this.exerInProgress = false;
    }
  }

  canDeactivate(): boolean {
    if (this.exerInProgress) {
      this.ts.openSnackBar("Exercise currently in progress.", 5000, 'center');
      return false;
    }
    return true;
  }

  ngOnDestroy() {
  }

}
