import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as utils from '../../shared/general.utils';
import * as em from '../../shared/error-matchers/error-state.matcher';
import * as valids from '../../shared/form-validators/general-form.validator';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-auth-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();
  signupFg: FormGroup;
  matcher: ErrorStateMatcher = new em.AfterActionsErrorStateMatcher();
  instaMatcher: ErrorStateMatcher = new em.InstantErrorStateMatcher();
  maxDate: moment.Moment = moment().subtract(1, 'day'); // max allowed date is current date minus 1

  get passwordCtrlValue(): string {
    return this.signupFg.get("password")?.value;
  }

  get minBirthday(): string {
    return moment().subtract(18, "years").format("MM/DD/YYYY");
  }

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public as: AuthService) {
    this.signupFg = this.fb.group({
      name: utils.createFormControl2('test1@aol.com', false, [Validators.required]),
      password: utils.createFormControl2('123456', false, [Validators.required, valids.custom4CountValidator]),
      birthday: utils.createFormControl2(null, false, [valids.validBirthdayInMoment]),
      agree: utils.createFormControl2(false, false, [valids.valueIsTrue]),
    })
  }

  ngOnInit() {
    this.signupFg.get("password")?.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res) => {
        let valueArr = this.signupFg.get("password")?.value ? (this.signupFg.get("password")?.value as string).split("") : [];
        if (valueArr && valueArr.length > 0) {
          if (valueArr[valueArr.length-1] === " ") {
            (this.signupFg.get("password") as FormControl).setValue(valueArr.slice(0, -1).join(""), {emitEvent: false});
          }
        }
      }
    );

    this.signupFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res) => {
      }
    );
  }

  onRegister() {
    if (this.signupFg.valid) {
      const val = this.getAllValues();
      this.as.onSignUp(val.name, val.password);
    }
  }

  getAllValues() {
    const value = {
      ...this.signupFg.value,
      birthday: this.signupFg.value.birthday ?
        ((this.signupFg.value.birthday as moment.Moment).valueOf()) : undefined
    };
    return value;
  }

  onLogin() {
    this.router.navigate(['../', 'signin'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.as.resetAuthErrorState();
    this.compDest$.next();
    this.compDest$.complete();
  }
}
