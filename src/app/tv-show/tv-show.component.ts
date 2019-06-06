import { Component, OnInit } from '@angular/core';
import { ITvShow } from '../itv-show';
import { TvShowService } from './tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  tvShow: ITvShow
  constructor(private tvShowService: TvShowService) {
    
  }

  ngOnInit() {
    this.tvShowService.getTvShow('chernobyl').subscribe(data => this.tvShow = data);
  }
}
