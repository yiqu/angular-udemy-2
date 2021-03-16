import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogExerciseComponent } from './dialog-exercise/dialog.component';
import { DialogConfirmComponent } from './dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle.module';
import { PipeBundleModule } from './pipes/pipe-bundle.module';

import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeBundleModule,

  ],
  exports: [
    TableComponent,
    DialogConfirmComponent,
    DialogExerciseComponent
  ],
  declarations: [
    TableComponent,
    DialogConfirmComponent,
    DialogExerciseComponent
  ],
  providers: [],
})
export class SharedComponentsModule { }
