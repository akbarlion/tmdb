import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtaService {

  languageQueryParam = 'id-ID'

  httpOptions = {
    headers: new HttpHeaders({
      Accept: "application/json",
      Authorization: 'Bearer ' + environment.access_token
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  get_list(page: number) {
    const languageQueryParam = 'language=id-ID';
    const pageQueryParam = `page=${page}`;

    const urlWithParams = `${environment.baseUrl}/tv/on_the_air?${languageQueryParam}&${pageQueryParam}`;
    return new Promise<any>((resolve, reject) => {
      return this.http.get(urlWithParams, this.httpOptions).subscribe({
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
