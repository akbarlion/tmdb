import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularService {
  languageQueryParam = 'id-ID'

  httpOptions = {
    headers: new HttpHeaders({
      Accept: "application/json",
      Authorization: 'Bearer ' + environment.access_token
    })
  }

  // https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'

  constructor(
    private http: HttpClient
  ) { }


  get_list(page: number) {
    const languageQueryParam = 'language=id-ID';
    const pageQueryParam = `page=${page}`;

    const urlWithParams = `${environment.baseUrl}/tv/popular?${languageQueryParam}&${pageQueryParam}`;
    return new Promise<any>((resolve, reject) => {
      this.http.get(urlWithParams, this.httpOptions).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      });
    });
  }

  get_details(id_series) {
    const languageQueryParam = 'language=id-ID';
    const series_id = id_series
    const urlWithParams = `${environment.baseUrl}/tv/${series_id}?${languageQueryParam}`;
    return new Promise<any>((resolve, reject) => {
      return this.http.get(urlWithParams, this.httpOptions).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }
}
