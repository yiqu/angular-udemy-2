import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'openToCssClass',
  pure: true
})
export class OpenStatusToCssClassPipe implements PipeTransform {

  @memo()
  transform(value: boolean | undefined): any {
    return value ? "issue-open" : "issue-closed";
  }
}

@Pipe({
  name: 'createdToCssClass',
  pure: true
})
export class CreatedStatusToCssClassPipe implements PipeTransform {

  @memo()
  transform(value: boolean | undefined): any {
    return value ? "" : "loading-bg";
  }
}

@Pipe({
  name: 'issueOpenStatusDisplay',
  pure: true
})
export class IssueOpenStatusPipe implements PipeTransform {

  transform(value: boolean | undefined, textMode: boolean): any {
    if (value) {
      return textMode ? 'opened' : 'open';
    }
    return textMode ? 'closed' : 'closed';
  }
}


@Pipe({
  name: 'getValueCountDisplay',
  pure: true
})
export class ValueCountPipe implements PipeTransform {

  transform(value: string): number {
    if (value) {
      let v = value+"";
      return v.trim().length;
    }
    return 0;
  }
}

@Pipe({
  name: 'iconDisplay',
  pure: true
})
export class ButtonIconDisplayPipe implements PipeTransform {

  transform(value: string): string {
    let result = "done";
    const v = value?.trim().toLowerCase();
    switch(v) {
      case "add another": {
        result = "add";
        break;
      }
      case "save": {
        result = "save";
        break;
      }
      case "delete all": {
        result = "delete";
        break;
      }
    }
    return result;
  }
}
