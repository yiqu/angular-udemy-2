import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AuthRoutingModule,
    MaterialModuleBundle,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule
  ],

  exports: [],

  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent
  ],

  providers: [],
})
export class AuthModule { }
