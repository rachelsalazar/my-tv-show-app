import { Component, OnInit } from '@angular/core';
import { ITvShow } from '../itv-show';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  show: ITvShow
  constructor() {
    this.show = {
      name: 'Bless this Mess',
      image: '',
      description: 'After dropping everything to make the move from skyscrapers to farmhouses, Rio and Mike soon realize that the simpler life isnt as easy as they planned.',
      cast: 'Lake Bell, Dax Shepard, Ed Begley Jr., Pam Greer',
      schedule: 'Tuesdays at 8:30CT'
    }
  }

  ngOnInit() {
  }

}
