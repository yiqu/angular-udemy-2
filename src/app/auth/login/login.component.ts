import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as utils from '../../shared/general.utils';
import * as em from '../../shared/error-matchers/error-state.matcher';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from '../reset-dialog/reset-password.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginFg: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private route: ActivatedRoute, public as: AuthService,
    public dialog: MatDialog) {
    this.loginFg = this.fb.group({
      name: utils.createFormControl2("test2@test.com", false),
      password: utils.createFormControl2("123456", false),
    })
  }

  ngOnInit() {
  }

  onSignin() {
    if (this.loginFg.value) {
      const name = this.loginFg.value.name;
      const password = this.loginFg.value.password;
      if (name && password) {
        this.as.onSignin(name, password);
      }
    }
  }

  onForgot() {
    const dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      width: '450px',
      minHeight: '400px',
      data: {email: this.loginFg.value?.name},
      hasBackdrop: true
    });

    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    this.as.resetAuthErrorState();
  }
}
