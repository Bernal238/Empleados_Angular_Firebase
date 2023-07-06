import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  horizontalPosition: MatSnackBarHorizontalPosition= 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  /**
* @description: Muestra un mensaje en pantalla usando MatSnackBar
* @param: {message}: string
* @param: {action}: string
* @returns void
* @memberof: Components
* @author: JMHB - 30/09/2021
*/
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition, panelClass: ['snackbar']
    });
  }

}
