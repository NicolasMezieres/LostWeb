import { Component, model } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-announcement-list',
  imports: [
    Header,
    Footer,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './announcement-list.html',
  styleUrl: './announcement-list.css',
})
export class AnnouncementList {
  signinForm = new FormGroup({
    identifier: new FormControl(''),
    password: new FormControl(''),
  });
  isVisibleFilter = model<boolean>(false);
  toogleMenuFilter() {
    this.isVisibleFilter.set(!this.isVisibleFilter());
  }
}
