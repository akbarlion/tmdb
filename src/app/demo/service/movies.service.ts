import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

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

  public get_movie_list(page: number) {
    const languageQueryParam = 'language=id-ID';
    const pageQueryParam = `page=${page}`

    const urlWithParams = `${environment.baseUrl}/movie/now_playing?${languageQueryParam}&${pageQueryParam}`;
    return new Promise<any>((resolve, reject) => {
      return this.http.get(urlWithParams, this.httpOptions).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }

}
