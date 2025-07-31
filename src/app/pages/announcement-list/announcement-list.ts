import { Component, effect, inject, model } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AnnouncementCard } from '../../components/card/announcement-card/announcement-card';
import { AnnouncementApi } from '../../services/announcement/announcement';
import { Toast } from '../../services/toast/toast';
import { announcementType } from '../../utils/types';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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
    AnnouncementCard,
  ],
  templateUrl: './announcement-list.html',
})
export class AnnouncementList {
  #announcement = inject(AnnouncementApi);
  #toast = inject(Toast);
  #router = inject(Router);
  data = model<announcementType[]>([]);
  page = model<number>(1);
  totalAnnouncement = model<number>(0);
  isEndList = model<boolean>();
  isLoading = model<boolean>(false);
  #formBuilder = inject(FormBuilder);
  announcementSearchForm = this.#formBuilder.nonNullable.group({
    search: '',
    isLost: new FormControl<boolean | null>(null),
    fromDate: '',
    toDate: '',
  });
  #getAnnouncement() {
    this.#announcement
      .getAnnouncementAdmin({
        ...this.announcementSearchForm.getRawValue(),
        page: this.page(),
      })
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.data.set(res.data);
          this.isEndList.set(res.isEndList);
          this.totalAnnouncement.set(res.total);
        },
        error: (err: HttpErrorResponse) => {
          this.#toast.failToast(err.error.message);
          //function logout
          this.#router.navigate(['/signin']);
        },
      });
  }
  announcementEffect = effect(() => {
    this.isLoading();
    this.#getAnnouncement();
    this.isLoading.set(false);
  });

  isVisibleFilter = model<boolean>(false);
  toogleMenuFilter() {
    this.isVisibleFilter.set(!this.isVisibleFilter());
  }
  searchAnnouncement() {
    this.isLoading.set(true);
  }
}
