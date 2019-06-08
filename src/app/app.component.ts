import { Component } from '@angular/core';
import { ITvShow } from './itv-show';
import { TvShowService } from './tv-show/tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-tv-show-app';

  tvShow: ITvShow

  constructor(private tvShowService: TvShowService) {

  }
  doSearch(searchValue) {
    if (searchValue) {
      const userInput = searchValue.split(' ').map(s => s.trim());
      this.tvShowService.getTvShow(userInput[0]).subscribe(data => this.tvShow = data)
    }
  }
}
