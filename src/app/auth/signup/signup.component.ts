import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as utils from '../../shared/general.utils';
import * as em from '../../shared/error-matchers/error-state.matcher';
import * as valids from '../../shared/form-validators/general-form.validator';

@Component({
  selector: 'app-auth-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupFg: FormGroup;
  matcher: ErrorStateMatcher = new em.AfterActionsErrorStateMatcher();

  get passwordCtrlValue(): string {
    return this.signupFg.get("password")?.value;
  }

  constructor(private fb: FormBuilder) {
    this.signupFg = this.fb.group({
      name: utils.createFormControl2(null, false, [Validators.required]),
      password: utils.createFormControl2(null, false, [Validators.required, valids.custom4CountValidator])
    })
  }

  ngOnInit() {
    this.signupFg.get("password").valueChanges.subscribe(
      (res) => {
        let valueArr = this.signupFg.get("password").value ? (this.signupFg.get("password").value as string).split("") : [];
        if (valueArr && valueArr.length > 0) {
          if (valueArr[valueArr.length-1] === " ") {
            (this.signupFg.get("password") as FormControl).setValue(valueArr.slice(0, -1).join(""), {emitEvent: false});
          }
        }
      }
    );
  }

  onRegister() {

  }

  onReset() {
    this.signupFg.reset();
  }
}
