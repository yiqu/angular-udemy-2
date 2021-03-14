import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { DialogConfirmComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  constructor(public dialog: MatDialog) {

  }

  openConfirmDialog(txt: string): Observable<any> {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      minWidth: '300px',
      data: {actionName: (txt + " this exercise?")}
    });

    return dialogRef.afterClosed().pipe(
      take(1)
    );
  }
}
