import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  announcementSearchResponse,
  announcementSearchType,
  announcementType,
} from '../../utils/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Announcement {
  #http = inject(HttpClient);
  readonly #url = environment.apiURL + 'annoncement/';

  getAnnouncementAdmin(
    data: announcementSearchType
  ): Observable<announcementSearchResponse> {
    return this.#http.get<announcementSearchResponse>(
      `${this.#url}announcementByAdmin?search=${data.search}&isLost=${
        data.isLost
      }&toDate=${data.toDate}&fromDate=${data.fromDate}&page=${data.page}`,
      { withCredentials: true }
    );
  }
}
