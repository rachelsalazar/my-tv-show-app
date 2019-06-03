import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ITvShowData {
  name: string,
  summary: string,
  
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }
}
