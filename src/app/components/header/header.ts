import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Menu } from '../modal/menu/menu';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.html',
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
