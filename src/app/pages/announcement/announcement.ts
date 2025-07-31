import { Component, effect, inject, model } from '@angular/core';
import { Header } from '../../components/header/header';
import { ActivatedRoute } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { AnnouncementApi } from '../../services/announcement/announcement';
import { announcementByIdType } from '../../utils/types';
import { take } from 'rxjs';
import { DatePipe } from '@angular/common';
import L, { icon } from 'leaflet';
@Component({
  selector: 'app-announcement',
  imports: [Header, Footer, DatePipe],
  templateUrl: './announcement.html',
})
export class Announcement {
  map: L.Map | null = null;
  #route = inject(ActivatedRoute);
  readonly paramId = this.#route.snapshot.params['id'];
  #announcementApi = inject(AnnouncementApi);
  announcementData = model<announcementByIdType | null>(null);
  announcementEffect = effect(() => {
    this.paramId;
    this.#announcementApi
      .getAnnouncementById(this.paramId)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.announcementData.set(res.data);
        },
      });
  });
  containerMap() {
    this.map?.remove();
    this.map = null;
    const lat = this.announcementData()?.latitude;
    const long = this.announcementData()?.longitude;
    this.map = L.map('map').setView([0, 0], 15);

    setTimeout(() => {
      if (lat != undefined && long != undefined) {
        this.map?.remove();
        this.map = L.map('map').setView([lat, long], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(this.map);
        const icon = L.icon({
          iconUrl: 'assets/images/marker.webp',
          iconSize: [16, 20],
        });
        L.marker([lat, long], { icon: icon }).addTo(this.map);
      }
    }, 500);
  }
}
