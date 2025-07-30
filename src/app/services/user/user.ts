import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {
  getUsersResponse,
  messageResponse,
  statisticType,
} from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class User {
  #http = inject(HttpClient);
  readonly #url = environment.apiURL + 'user/';

  getStatistic(): Observable<statisticType> {
    return this.#http.get<statisticType>(`${this.#url}statistic`, {
      withCredentials: true,
    });
  }
  getUsers(page?: number, search?: string): Observable<getUsersResponse> {
    return this.#http.get<getUsersResponse>(
      `${this.#url}?search=${search ? search : ''}&page=${page}`,
      { withCredentials: true }
    );
  }
  banUser(id: string): Observable<messageResponse> {
    return this.#http.patch<messageResponse>(
      `${this.#url}banishment/${id}`,
      null,
      { withCredentials: true }
    );
  }
  removeUser(id: string): Observable<messageResponse> {
    return this.#http.delete<messageResponse>(`${this.#url}remove/${id}`, {
      withCredentials: true,
    });
  }
}
