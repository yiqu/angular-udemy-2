import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule
  ],

  exports: [
    CoreComponent
  ],

  declarations: [
    CoreComponent
  ],

  providers: [],
})
export class CoreModule { }
