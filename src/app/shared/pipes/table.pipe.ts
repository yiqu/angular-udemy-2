import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import { DateDisplayPipe } from './time-utils.pipe';

@Pipe({
  name: 'tableColumnDisplay',
  pure: true
})
export class TableColumnDisplayPipe implements PipeTransform {

  constructor(private dp: DateDisplayPipe) {
  }

  @memo()
  transform(value: string): any {
    let res: string = value;

    switch(value) {
      case "name": {
        res = "Exercise Name";
        break;
      }
      case "id": {
        res = "Exercise ID";
        break;
      }
      case "sets": {
        res = "Sets";
        break;
      }
      case "countPerSet": {
        res = "Rep / Time (Per Set)";
        break;
      }
      case "setUnitTypeIsTime": {
        res = "Time Based";
        break;
      }
      case "created": {
        res = "Created";
        break;
      }
      case "lastUpdated": {
        res = "Updated";
        break;
      }
      case "options": {
        res = "Actions";
        break;
      }
    }
    return res;
  }

}

@Pipe({
  name: 'tableDataDisplay',
  pure: true
})
export class TableDataDisplayPipe implements PipeTransform {

  constructor(private dp: DateDisplayPipe) {
  }

  transform(value: any, colId: string, isTimeBased?: boolean): any {
    let res: any = value;

    switch(colId) {
      case "countPerSet": {
        res = isTimeBased ? (res + " seconds") : (res + " reps");
        break;
      }
      case "setUnitTypeIsTime": {
        res = res ? 'Yes' : 'No';
        break;
      }
      case "created": {
        res = "" + this.dp.transform(res, 'FROMNOW');
        break;
      }
      case "lastUpdated": {
        res = "" + this.dp.transform(res, 'FROMNOW');
        break;
      }
    }

    return res;
  }

}


