import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { User } from '../../services/user/user';
import { take } from 'rxjs';
import { Toast } from '../../services/toast/toast';
import { HttpErrorResponse } from '@angular/common/http';
import { statisticType } from '../../utils/types';

@Component({
  selector: 'app-statistic',
  imports: [Header, Footer],
  templateUrl: './statistic.html',
  styleUrl: './statistic.css',
})
export class Statistic {
  #toast = inject(Toast);
  #user = inject(User);
  data!: statisticType;
  statistic$ = this.#user
    .getStatistic()
    .pipe(take(1))
    .subscribe({
      next: (value) => this.data=value,
      error: (err: HttpErrorResponse) => {
        this.#toast.failToast(err.error.message);
      },
    });
}
