import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShow } from '../itv-show';
import {map} from 'rxjs/operators';

interface ITvShowData {
  name: string,
  image: {
    medium: string
  },
  summary: string,
  schedule: {
    days: string
  },
  rating: {
    average: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }

  getTvShow(userShow: string) {
    return this.httpClient.get<ITvShowData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${userShow}&appid=${environment.appid}`).pipe(map(data => this.transformToITvShow(data)))
  }


  private transformToITvShow(data: ITvShowData) : ITvShow {
    return {
      name: data.name,
      image: data.image.medium,
      description: data.summary.replace(/(<([^>]+)>)/ig,""),
      schedule: data.schedule.days,
      rating: data.rating.average
    }
  }
}
