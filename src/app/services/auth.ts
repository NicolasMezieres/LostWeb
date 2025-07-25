import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { messageResponse, signinResponse, signinType } from '../utils/types';
import { catchError, Observable, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  #http = inject(HttpClient);
  readonly #url = environment.apiURL;
  signin(data: signinType): Observable<signinResponse> {
    return this.#http.post<signinResponse>(`${this.#url}auth/signin`, data, {
      withCredentials: true,
    });
  }

  forgetPassword(data: { email: string }): Observable<messageResponse> {
    return this.#http.post<messageResponse>(
      `${this.#url}auth/forgetPassword`,
      data
    );
  }
  resetPassword(data: { password: string }): Observable<messageResponse> {
    return this.#http.patch<messageResponse>(
      `${this.#url}auth/resetPassword`,
      data
    );
  }
}
