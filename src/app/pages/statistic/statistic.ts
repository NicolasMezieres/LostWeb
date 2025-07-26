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
  template: `<div class="flex flex-col min-h-screen bgGradient">
    <app-header [index]="4" />
    <main class="flex-auto flex justify-center items-center p-5">
      <article
        class="bg-white90 font-agdasima rounded-xl text-center w-full md:w-1/3 flex flex-col justify-center items-center"
      >
        <h1 class="font-kay text-xl py-5 md:text-[32px]">Statistic</h1>
        <ul class="flex flex-col gap-5 pb-5">
          <li>Total announcement : {{ data.numberAnnouncement }}</li>
          <li>
            Total announcement resolved : {{ data.numberArchiveAnnouncement }}
          </li>
          <li>
            Total announcement not resolved :
            {{ data.numberAnnouncement - data.numberArchiveAnnouncement }}
          </li>
          <li>
            Percentage announcement resolved :
            {{
              (
                (100 * data.numberArchiveAnnouncement) /
                data.numberAnnouncement
              ).toFixed(2)
            }}
            %
          </li>
          <li>Total user account : {{ data.numberAccount }}</li>
          <li>Total user active : {{ data.numberActiveAccount }}</li>
        </ul>
      </article>
    </main>
    <app-footer />
  </div> `,
})
export class Statistic {
  #toast = inject(Toast);
  #user = inject(User);
  data!: statisticType;
  statistic$ = this.#user
    .getStatistic()
    .pipe(take(1))
    .subscribe({
      next: (value) => (this.data = value),
      error: (err: HttpErrorResponse) => {
        this.#toast.failToast(err.error.message);
      },
    });
}
