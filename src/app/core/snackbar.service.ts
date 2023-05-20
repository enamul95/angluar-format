import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }
  
  durationInSeconds = 5;
  openSnackBar(message:string,action:string='Ok') {
    this._snackBar.open(message,action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }

  openSnackBar1(message: string, type:string) {    

    this._snackBar.open(message,'Ok', {
      duration: 2000,     
      panelClass: ["style-error"]
    });
}
  
}

