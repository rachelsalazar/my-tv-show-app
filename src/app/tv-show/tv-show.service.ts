import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface ITvShowData {
  name: string,
  image: {
    medium: string
  },
  summary: string,
  schedule: {
    days: string
  },
  rating: number
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }

  getTvShow(show: string) {
    return this.httpClient.get<ITvShowData>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${show}&appid=${environment.appId}`)
  }

}
