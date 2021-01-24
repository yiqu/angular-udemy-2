import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as utils from '../../shared/general.utils';
import * as em from '../../shared/error-matchers/error-state.matcher';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginFg: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.loginFg = this.fb.group({
      name: utils.createFormControl2(null, false),
      password: utils.createFormControl2(null, false),
    })
  }

  ngOnInit() {

  }

  goToRegister() {
    this.router.navigate(['../', 'signup'], {relativeTo: this.route});
  }
}
