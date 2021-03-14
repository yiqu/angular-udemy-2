import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from './material-bundle.module';

import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    CommonModule,
    FormsModule
  ],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [],
})
export class SharedComponentsModule { }
