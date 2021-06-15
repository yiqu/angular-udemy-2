import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { ResetPasswordDialogComponent } from './reset-dialog/reset-password.component';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    MaterialModuleBundle,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatMomentDateModule,
    FlexLayoutModule,
    SharedComponentsModule
  ],

  exports: [],

  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ResetPasswordDialogComponent
  ],

  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AuthModule { }
