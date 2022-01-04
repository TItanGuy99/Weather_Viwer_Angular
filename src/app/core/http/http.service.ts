import { WeatherData } from './../data/data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  /* get method */
  get(url: string): Observable<WeatherData> {
    return this.http.get<any>(url).pipe(map(response => {
      return {
        name: response.name,
        icon: response.weather[0].icon,
        feels_like: response.main.feels_like,
        humidity: response.main.humidity,
        temp: response.main.temp,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        lat: response.coord.lat,
        lon: response.coord.lon
      }
    }));
  }
}
