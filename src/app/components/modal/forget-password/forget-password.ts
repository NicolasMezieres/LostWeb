import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './forget-password.html',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class ForgetPasswordModal {
  readonly dialogRef = inject(MatDialogRef<ForgetPasswordModal>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
