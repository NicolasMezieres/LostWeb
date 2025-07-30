import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Menu } from '../modal/menu/menu';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  template: `
    <header
      class="p-5 flex justify-between items-center border-b border-black md:px-10 xl:px-20"
    >
      <img src="/assets/images/logo.webp" class="h-12" />
      <button (click)="openMenu()">
        <mat-icon
          inline="true"
          class="!text-[40px] xl:!hidden"
          aria-hidden="false"
          aria-label="menu icon"
          fontIcon="menu"
        />
      </button>
      <ul class="gap-24 hidden xl:flex text-xl">
        @for(element of arrayElementNav; track $index){
        <a
          [routerLink]="['/' + element.toLowerCase()]"
          [className]="$index + 1 == index() ? 'underline' : ''"
          >{{ element.replaceAll('_', ' ') }}</a
        >
        }
      </ul>
      <button class="hidden xl:block text-xl" (click)="logout($event)">
        Logout
      </button>
    </header>
  `,
})
export class Header {
  index = input.required();
  #router = inject(Router);
  readonly arrayElementNav = [
    'Home',
    'User_list',
    'Announcement_list',
    'Statistic',
  ];
  readonly modalMenu = inject(MatDialog);

  openMenu() {
    this.modalMenu.open(Menu, {
      position: { top: '0', left: '0', bottom: '0' },
      height: '100vh',
      minWidth: '320px',
      maxWidth: '375px',
      data: { index: this.index() },
    });
  }
  async logout(e: Event) {
    e.preventDefault();
    //await logout
    this.#router.navigate(['/signin']);
  }
}
