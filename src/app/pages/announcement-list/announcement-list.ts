import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-announcement-list',
  imports: [Header, Footer],
  templateUrl: './announcement-list.html',
  styleUrl: './announcement-list.css'
})
export class AnnouncementList {

}
