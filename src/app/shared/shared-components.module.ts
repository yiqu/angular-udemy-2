import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle.module';
import { PipeBundleModule } from './pipes/pipe-bundle.module';

import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    PipeBundleModule,

  ],
  exports: [
    TableComponent,
    DialogConfirmComponent
  ],
  declarations: [
    TableComponent,
    DialogConfirmComponent
  ],
  providers: [],
})
export class SharedComponentsModule { }
