import { NgModule } from '@angular/core';
import { CountNumberDisplayPipe } from './count-display.pipe';
import { PluralDisplayPipe } from './plural.pipe';
import { DateDisplayPipe } from './time-utils.pipe';
import { UserDisplayPipe } from './user.pipe';
import { CapitalizeFirstLetterPipe } from './letters.pipe';
import { TableColumnDisplayPipe, TableDataDisplayPipe } from './table.pipe';
import { ButtonIconDisplayPipe, CreatedStatusToCssClassPipe, IssueOpenStatusPipe, OpenStatusToCssClassPipe, ValueCountPipe } from './general.pipe';

@NgModule({
  imports: [],

  exports: [
    PluralDisplayPipe,
    CountNumberDisplayPipe,
    DateDisplayPipe,
    UserDisplayPipe,
    CapitalizeFirstLetterPipe,
    TableColumnDisplayPipe,
    TableDataDisplayPipe,
    OpenStatusToCssClassPipe,
    CreatedStatusToCssClassPipe,
    IssueOpenStatusPipe,
    ValueCountPipe,
    ButtonIconDisplayPipe
  ],

  declarations: [
    PluralDisplayPipe,
    CountNumberDisplayPipe,
    DateDisplayPipe,
    UserDisplayPipe,
    CapitalizeFirstLetterPipe,
    TableColumnDisplayPipe,
    TableDataDisplayPipe,
    OpenStatusToCssClassPipe,
    CreatedStatusToCssClassPipe,
    IssueOpenStatusPipe,
    ValueCountPipe,
    ButtonIconDisplayPipe
  ],

  providers: [
    DateDisplayPipe
  ],
})
export class PipeBundleModule { }
