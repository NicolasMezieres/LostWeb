import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-announcement-card',
  imports: [RouterLink, DatePipe],
  template: `
    <article
      class="bg-white90 flex flex-col gap-2.5 rounded-xl p-2.5 text-center"
    >
      <div class="flex gap-4">
        <img
          [src]="picture()"
          alt="Picture not available"
          class="w-32 h-32 text-center border border-white rounded-md object-contain"
        />
        <section class="flex flex-col justify-between">
          <h3 class="md:text-xl">{{ name() }}</h3>
          <a
            [routerLink]="'/announcement/' + announcementId()"
            class="bg-white rounded-md w-32 p-1 md:text-xl"
            >See</a
          >
        </section>
      </div>
      <div class="text-xs md:text-base flex justify-between">
        <p>{{ date() | date : 'yyyy/MM/dd' : 'UTC' }}</p>
        <p>{{ username() }}</p>
      </div>
    </article>
  `,
})
export class AnnouncementCard {
  name = input.required<string>();
  picture = input<string>();
  announcementId = input.required<string>();
  date = input.required<string>();
  username = input.required<string>();
}
