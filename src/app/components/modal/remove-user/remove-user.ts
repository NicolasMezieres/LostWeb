import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../services/user/user';
import { Toast } from '../../../services/toast/toast';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-remove-user',
  imports: [],
  template: `
    <div class="p-5 font-agdasima flex flex-col items-center bg-white">
      <h1 class="text-xl text-center mb-10">
        Are you sure to {{ data.isRemove ? 'remove' : 'ban' }}
        {{ data.username }} ?
      </h1>
      <button
        (click)="data.isRemove ? removeUser() : banUser()"
        class="bg-red-700 text-white p-2.5 rounded-md"
      >
        {{ data.isRemove ? 'Remove' : 'Ban' }}
      </button>
    </div>
  `,
})
export class RemoveUserModal {
  #user = inject(User);
  #toast = inject(Toast);
  readonly dialogRef = inject(MatDialogRef<RemoveUserModal>);
  data = inject(MAT_DIALOG_DATA);
  onNoClick(): void {
    this.dialogRef.close();
  }
  removeUser() {
    this.#user
      .removeUser(this.data.id)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.#toast.successToast(res.message);
          this.onNoClick();
        },
        error: (err: HttpErrorResponse) => {
          this.#toast.failToast(err.error.message);
          this.onNoClick();
        },
      });
  }
  banUser() {
    this.#user
      .banUser(this.data.id)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.#toast.successToast(res.message);
          this.onNoClick();
        },
        error: (err: HttpErrorResponse) => {
          this.#toast.failToast(err.error.message);
          this.onNoClick();
        },
      });
  }
}
