import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise } from 'src/app/admin/store/admin.state';
import { createFormControl2 } from '../general.utils';

@Component({
  selector: 'app-shared-dialog-exer',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogExerciseComponent implements OnInit {

  exerFg: FormGroup = new FormGroup({});
  public setOptions: number[] = [3, 5 , 7, 10];
  public timeOptions: number[] = [10, 20, 30, 40, 50, 60];

  constructor(public dialogRef: MatDialogRef<DialogExerciseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise, private fb: FormBuilder) {
      this.exerFg = this.fb.group({
        name: createFormControl2(this.data.name, false, [Validators.required]),
        sets: createFormControl2(this.data.sets, false),
        countPerSet: createFormControl2(this.data.countPerSet, false),
        setUnitTypeIsTime: createFormControl2(this.data.setUnitTypeIsTime, false),
      });
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close(false);
  }

  onYesClick() {
    this.dialogRef.close({
      ...this.exerFg.value,
      id: this.data.id
    });
  }
}
