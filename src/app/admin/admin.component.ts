import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createFormControl2 } from '../shared/general.utils';
import { AdminService } from './admin.service';
import { AdminNewExerSubMenu, PanelButtonType } from './store/admin.state';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public as: AdminService) {

  }

  ngOnInit() {
  }

  onPanelBtnClick(sel: PanelButtonType) {
    if (sel.btnName === "Save") {
      this.as.onNewExerSaveClick();
    }
  }

  onPanelMenuClick(sel: AdminNewExerSubMenu) {
    this.as.addNewExer(sel);
  }

}
