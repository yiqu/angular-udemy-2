import { NgModule } from '@angular/core';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { TrainingComponent } from './training.component';

@NgModule({
  imports: [
    MaterialModuleBundle
  ],

  exports: [
    TrainingComponent
  ],

  declarations: [
    TrainingComponent
  ],

  providers: [],
})
export class TrainingModule { }
