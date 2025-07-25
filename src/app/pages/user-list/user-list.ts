import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-user-list',
  imports: [Header, Footer],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

}
