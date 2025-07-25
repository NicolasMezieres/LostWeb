import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-statistic',
  imports: [Header, Footer],
  templateUrl: './statistic.html',
  styleUrl: './statistic.css'
})
export class Statistic {

}
