import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditExerComponent implements OnInit {

  constructor(public as: AdminService) {
    this.as.setCurrentPageState("edit");
  }

  ngOnInit() {

  }
}
