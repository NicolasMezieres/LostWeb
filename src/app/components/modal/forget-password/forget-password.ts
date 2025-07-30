import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <div class="p-5 font-agdasima">
      <h1 class="text-xl text-center mb-10">Enter your email</h1>
      <form class="flex flex-col justify-center items-center gap-10">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Email</mat-label>
          <input
            matInput
            placeholder="example@example.com"
            class="md:text-xl"
          />
        </mat-form-field>
        <button matButton>Connexion</button>
      </form>
    </div>
  `,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class ForgetPasswordModal {
  readonly dialogRef = inject(MatDialogRef<ForgetPasswordModal>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
