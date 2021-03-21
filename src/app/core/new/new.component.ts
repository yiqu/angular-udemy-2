import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { createFormControl2 } from '../../shared/general.utils';

@Component({
  selector: 'app-core-new',
  templateUrl: 'new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exerSelectFc: FormControl;

  constructor(public as: AuthService) {
    this.exerSelectFc = createFormControl2(null, false);
  }

  ngOnInit() {

  }
}
