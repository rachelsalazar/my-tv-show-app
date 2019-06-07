import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TvShowService } from '../tv-show/tv-show.service';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {
  search = new FormControl()

  constructor(private tvShowService: TvShowService) { }

  ngOnInit() {
    this.search.valueChanges.subscribe((searchValue : string) => {
      if (searchValue) {
        const userInput = searchValue.split(' ').map(s => s.trim());
        this.tvShowService.getTvShow(userInput[0]).subscribe(data => console.log(data))
      }
    })
  }

}

//, userInput.length > 1 ? userInput[1] : undefined