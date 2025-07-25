import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Toast {
  defaultOption: MatSnackBarConfig<any> = {
    verticalPosition: 'top',
    duration: 3000,
  };
  private _snackBar = inject(MatSnackBar);
  successToast(message: string) {
    this._snackBar.open(message, '', {
      ...this.defaultOption,
      panelClass: 'successToast',
    });
  }
  failToast(message: string) {
    this._snackBar.open(message, '', {
      ...this.defaultOption,
      panelClass: 'failToast',
    });
  }
}
