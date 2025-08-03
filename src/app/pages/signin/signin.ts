import { Component, inject } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auth } from '../../services/auth';
import { signinType } from '../../utils/types';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Toast } from '../../services/toast/toast';
import { Router } from '@angular/router';
import { ForgetPasswordModal } from '../../components/modal/forget-password/forget-password';
@Component({
  selector: 'app-signin',
  imports: [
    Footer,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  #toast = inject(Toast);
  #router = inject(Router);
  isSubmit: boolean = false;
  #auth = inject(Auth);
  signinForm = new FormGroup({
    identifier: new FormControl('', [
      Validators.required,
      Validators.maxLength(320),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
  });
  readonly dialog = inject(MatDialog);
  openDialog(e: Event): void {
    e.preventDefault();
    const dialogRef = this.dialog.open(ForgetPasswordModal, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  submitForm(e: Event) {
    this.isSubmit = true;
    if (this.signinForm.valid) {
      const data = this.signinForm.value as signinType;
      this.#auth
        .signin(data)
        .pipe(take(1))
        .subscribe({
          next: (value) => {
            if (value.role === 'Admin') {
              this.#toast.successToast(value.message);
              this.#router.navigate(['home']);
            } else {
              this.#toast.failToast('Your account are unauthorized');
            }
          },
          error: (err: HttpErrorResponse) => {
            this.#toast.failToast(
              Array.isArray(err.error.message)
                ? err.error.message[0]
                : err.error.message
            );
          },
        });
    }
  }
}
