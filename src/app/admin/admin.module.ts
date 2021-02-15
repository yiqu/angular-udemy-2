import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    MaterialModuleBundle,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports: [],

  declarations: [
    AdminComponent
  ],

  providers: [],
})
export class AdminModule { }
