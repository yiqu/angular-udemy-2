import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { CompletedTrainingComponent } from './completed/completed.component';
import { CoreComponent } from './core.component';
import { NewTrainingComponent } from './new/new.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],

  exports: [
    CoreComponent
  ],

  declarations: [
    CoreComponent,
    CompletedTrainingComponent,
    ProgressComponent,
    NewTrainingComponent
  ],

  providers: [],
})
export class CoreModule { }
