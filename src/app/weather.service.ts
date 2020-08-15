import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&units=mteric&appid=${environment.apiKey}`);
  }
  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/onecall?lat=18.520&lon=73.856&cnt=7&exclude=current,minutely,hourly&units=mteric&appid=${environment.apiKey}`);
  }
}

