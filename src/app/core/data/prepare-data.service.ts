import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WeatherData } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class PrepareDataService {
  /* Variable responsible for saving the response with the weather
     and Sharing it thought the components */
  saveResponse: WeatherData = {
    name: '',
    icon: '',
    feels_like: 0,
    humidity: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    lat: 0,
    lon: 0
  };

  loading: boolean = true;
  noData: boolean = false;

  constructor(private httpService: HttpService) {}

  /* Method to search the weather by coordinates */
  getByCoordinates(lat: number, lon: number): void {
    this.loading = true;
    this.noData = false;
    const url: string = `${environment.url}lat=${lat}&lon=${lon}&units=metric&appid=${environment.API_KEY}`;
    this.httpService.get(url).subscribe({
      next: (resp) => {
        this.saveResponse = resp;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.noData = true;
      },
    });
  }

  /* Method to search the weather by city and country */
  getByCityCountry(city: string, country: string): void {
    this.loading = true;
    this.noData = false;
    const url: string = `${environment.url}q=${city},${country}&units=metric&appid=${environment.API_KEY}`;
    this.httpService.get(url).subscribe({
      next: (resp) => {
        this.saveResponse = resp;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.noData = true;
      },
    });
  }
}
