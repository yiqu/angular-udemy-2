import {Component} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(msg: string, time: number = 3000, xPosition: MatSnackBarHorizontalPosition = 'start') {
    this._snackBar.open(msg, 'Close', {
      duration: time,
      horizontalPosition: xPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
