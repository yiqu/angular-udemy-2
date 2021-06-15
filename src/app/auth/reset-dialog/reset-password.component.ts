import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as fromUtils from '../../shared/general.utils';


@Component({
  selector: 'app-auth-reset-dialog',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordDialogComponent implements OnInit {

  emailFc: FormControl;

  constructor(public dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {email: string}, public as: AuthService) {
      this.emailFc = fromUtils.createFormControl2(this.data.email, false, [Validators.required, Validators.email]);
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.data.email) {
      this.as.sendUserLoginReset(this.data.email);
    }
    //this.dialogRef.close();
  }
}
