import { Component, effect, inject, input, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../services/user/user';
import { take } from 'rxjs';
import { userType } from '../../utils/types';
import { Toast } from '../../services/toast/toast';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RemoveUserModal } from '../../components/modal/remove-user/remove-user';

@Component({
  selector: 'app-user-list',
  imports: [Header, Footer, MatIcon, DatePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  #user = inject(User);
  #toast = inject(Toast);
  #router = inject(Router);
  readonly modalRemoveUser = inject(MatDialog);
  columnsName: string[] = [
    'Username',
    'Email',
    'First name',
    'Last name',
    'Active',
    'GDPR',
    'Date of Creation',
    'Last activity',
    // 'Messages',
    // 'Ban',
    // 'Remove',
  ];

  userList: userType[] = [];
  totalUser: number = 0;
  isEndList: boolean = true;
  isLoading = signal<boolean>(true);
  page = signal<number>(1);
  search = signal<string>('');
  user$ = effect(() => {
    const search = this.search();
    const page = this.page();
    const isLoading = this.isLoading();
    const delay = setTimeout(() => {
      this.requestUserList();
      this.isLoading.set(false);
    }, 500);
    return () => {
      clearTimeout(delay);
    };
  });
  requestUserList() {
    this.#user
      .getUsers(this.page(), this.search())
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.userList = res.data;
          this.totalUser = res.totalUser;
          this.isEndList = res.isEndList;
        },
        error: (err: HttpErrorResponse) => {
          this.#toast.failToast(err.error.message);
          // todo: service logout
          this.#router.navigate(['/signin']);
        },
      });
  }

  removeUser(id: string, username: string, isRemove: boolean) {
    this.modalRemoveUser
      .open(RemoveUserModal, {
        data: { id: id, username: username, isRemove: isRemove },
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.requestUserList();
        },
      });
  }
  onSearchChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.search.set(value);
  }
}
