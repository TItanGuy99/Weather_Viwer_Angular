import { WeatherData } from './../data/data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /* get method */
  get(url: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(url);
  }
}