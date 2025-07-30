import { Component, inject, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ForgetPasswordModal } from '../forget-password/forget-password';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatIcon, RouterLink],
  template: `
    <div class="bg-white h-screen w-screen max-w-[375px]">
      <button (click)="closeMenu()" class="absolute right-4 top-4">
        <mat-icon
          inline="true"
          class="!text-[40px] xl:!hidden"
          aria-hidden="false"
          aria-label="menu icon"
          fontIcon="close"
        />
      </button>
      <ul
        class="gap-24 flex flex-col justify-center items-center h-screen text-xl"
      >
        @for(element of arrayElementModal; track $index){
        <a
          (click)="closeMenu()"
          [routerLink]="['/' + element.toLowerCase()]"
          [className]="$index + 1 == data.index ? 'underline' : ''"
          >{{ element }}
        </a>
        }
        <button (click)="logout($event); closeMenu()">Logout</button>
      </ul>
    </div>
  `,
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
