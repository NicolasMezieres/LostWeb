import { Component, inject, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ForgetPasswordModal } from '../forget-password/forget-password';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatIcon, RouterLink],
  templateUrl: './menu.html',
})
export class Menu {
  #router = inject(Router);
  logout(e: Event) {
    //service user logout
    this.#router.navigate(['/signin']);
  }
  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ForgetPasswordModal>);
  readonly arrayElementModal = [
    'Home',
    'User_list',
    'Announcement_list',
    'Statistic',
  ];
  closeMenu(): void {
    this.dialogRef.close();
  }
}
