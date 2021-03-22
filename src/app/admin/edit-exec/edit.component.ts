import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogConfirmComponent } from 'src/app/shared/dialog/dialog.component';
import { TableActionButtonData } from 'src/app/shared/models/general.model';
import { DialogConfirmService } from 'src/app/shared/services/confirm.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css', '../admin.component.css']
})
export class EditExerComponent implements OnInit {

  columns: string[] = ['name', 'sets', 'countPerSet', 'setUnitTypeIsTime', 'created', 'lastUpdated'];
  optionBtns: string[] = ['edit', 'delete'];

  constructor(public as: AdminService, public cs: DialogConfirmService) {
    this.as.setCurrentPageState("edit");
  }

  ngOnInit() {
    this.as.getAllExers();
  }

  onActionBtnClick(btnData: TableActionButtonData) {
    if (btnData.btnAction === 'edit') {
      this.as.editExercise(btnData.data).subscribe(
        (res) => {
          if (res && btnData.data) {
            this.as.updateExercise(res);
          }
        }
      )
    } else if (btnData.btnAction === 'delete') {
      this.cs.openConfirmDialog("delete").subscribe(
        (res) => {
          if (res) {
            if (res && btnData.data) {
              const exers = [btnData.data];
              this.as.deleteExercise(exers);
            }
          }
        }
      );
    }

  }
}
