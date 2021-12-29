import { Component, OnInit } from '@angular/core';
import { PrepareDataService } from 'src/app/core/data/prepare-data.service';

@Component({
  selector: 'app-show-data-component',
  templateUrl: './show-data-component.component.html',
  styleUrls: ['./show-data-component.component.css']
})
export class ShowDataComponentComponent implements OnInit {

  constructor(public prepateDataService: PrepareDataService) { }

  ngOnInit(): void {
    /* get random numbers to get coordinates */
    /* Latitudes range from -90 to 90 */
    let min = Math.ceil(-90);
    let max = Math.floor(90);
    let randomlat = Math.floor(Math.random() * (max - min)) + min;
    /* Longitudes range from -180 to 80. */
    min = Math.ceil(-180);
    max = Math.floor(80);
    let randomlon = Math.floor(Math.random() * (max - min)) + min;

    this.prepateDataService.getByCoordinates(randomlat, randomlon);
  }
}
