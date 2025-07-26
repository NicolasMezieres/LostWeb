import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, MatButton, RouterLink],
  template: `<div class="flex flex-col min-h-screen bgGradient">
    <app-header [index]="1"></app-header>
    <main
      class="flex-auto font-agdasima flex flex-col justify-center items-center gap-10 md:gap-20 text-center text-white px-5 md:px-10 xl:px-20"
    >
      <h1 class="font-kay text-xl md:text-[32px]">
        Welcome to the panel Aadministrator
      </h1>
      <h2 class=" text-xl md:text-2xl">
        Use the menu for navigate to the different page and access to the data
        of the main app
      </h2>
      <ul class="text-black flex flex-col gap-10 justify-center md:flex-row">
        <a matButton="outlined" [routerLink]="'/user_list'">User list</a>
        <a matButton="outlined" [routerLink]="'/announcement_list'"
          >Announcement list</a
        >
        <a matButton="outlined" class="border" [routerLink]="'/statistic'"
          >Statistic</a
        >
      </ul>
    </main>
    <app-footer></app-footer>
  </div> `,
})
export class Home {}
