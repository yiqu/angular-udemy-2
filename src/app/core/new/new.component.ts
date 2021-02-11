import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-core-new',
  templateUrl: 'new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewTrainingComponent implements OnInit {

  constructor(public as: AuthService) {

  }

  ngOnInit() {

  }
}
