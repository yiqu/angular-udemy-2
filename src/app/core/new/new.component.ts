import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/admin/store/admin.state';
import { AuthService } from 'src/app/shared/services/auth.service';
import { createFormControl2 } from '../../shared/general.utils';
import { CoreExerciseService } from '../core.service';

@Component({
  selector: 'app-core-new',
  templateUrl: 'new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exerSelectFc: FormControl;

  constructor(public as: AuthService, public cs: CoreExerciseService, private router: Router,
    private route: ActivatedRoute) {
    this.exerSelectFc = createFormControl2(null, false);
  }

  ngOnInit() {
    this.exerSelectFc.valueChanges.subscribe(
      (res: Exercise) => {
        if (res && res.name) {
          console.log(res)
        } else {
          // Go to add new exer
          this.router.navigate(['/', 'my-trainings', 'new-exer']);
        }
      }
    )
  }
}
