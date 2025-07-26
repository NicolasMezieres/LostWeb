import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { statisticType } from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class User {
  #http = inject(HttpClient);
  readonly #url = environment.apiURL + 'user/';

  getStatistic(): Observable<statisticType> {
    return this.#http.get<statisticType>(`${this.#url}statistic`);
  }
}
