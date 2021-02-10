import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { TrainingModule } from '../training/training.module';
import { CompletedTrainingComponent } from './completed/completed.component';
import { CoreComponent } from './core.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    TrainingModule
  ],

  exports: [
    CoreComponent
  ],

  declarations: [
    CoreComponent,
    CompletedTrainingComponent,
    ProgressComponent
  ],

  providers: [],
})
export class CoreModule { }
