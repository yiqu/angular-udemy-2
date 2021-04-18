import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Exercise } from 'src/app/admin/store/admin.state';
import { AuthService } from 'src/app/shared/services/auth.service';
import { createFormControl2 } from '../../shared/general.utils';
import { CoreExerciseService } from '../core.service';

@Component({
  selector: 'app-core-new',
  templateUrl: 'new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  exerSelectFc: FormControl;

  compDest$: Subject<any> = new Subject<any>();

  constructor(public as: AuthService, public cs: CoreExerciseService, private router: Router,
    private route: ActivatedRoute) {
    this.exerSelectFc = createFormControl2(null, false);
  }

  ngOnInit() {
    this.exerSelectFc.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res: Exercise) => {
        if (res && res.name) {
          if (res.id) {
            this.cs.selectExerciseToStart(res.id);
            this.router.navigate(['/', 'home', 'progress', res.id]);
          }
        } else {
          this.router.navigate(['/', 'my-trainings', 'new-exer']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
