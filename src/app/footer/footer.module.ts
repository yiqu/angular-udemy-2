import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { AppFooterComponent } from './footer.component';

@NgModule({
  imports: [
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ],

  exports: [AppFooterComponent],

  declarations: [AppFooterComponent],

  providers: [],
})
export class FooterModule { }
