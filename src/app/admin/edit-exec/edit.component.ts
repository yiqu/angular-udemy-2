import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css', '../admin.component.css']
})
export class EditExerComponent implements OnInit {

  columns: string[] = ['id', 'sets', 'countPerSet', 'setUnitTypeIsTime'];
  optionBtns: string[] = ['edit', 'delete'];

  constructor(public as: AdminService) {
    this.as.setCurrentPageState("edit");
  }

  ngOnInit() {
    this.as.getAllExers();
  }

}
