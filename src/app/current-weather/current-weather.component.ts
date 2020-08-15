import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

import { MatCheckbox } from '@angular/material/checkbox';
import { Subscription } from 'rxjs';
import { from } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  loc: string;
  weatherdata: any;
  currentTemp: any;
  cityName: any;
  currentWeatherDescription: any;
  todaysHighTemp: any;
  todaysLowTemp: any;
  windSpeed: any;
  humidity: any;
  pressure: any;
  sunrise: any;
  sunset: any;

  constructor(private weatherService: WeatherService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.getCurrentWeatherList();
  }

  getCurrentWeatherList() {
    this.weatherService.getCurrentWeather('Pune')
      .subscribe(result => {
        console.log('result', result);
        this.weatherdata = result;
        this.currentTemp = this.weatherdata.main.temp;
        this.cityName = this.weatherdata.name;
        this.todaysHighTemp = this.weatherdata.main.temp_max;
        this.windSpeed = this.weatherdata.wind.speed;
        this.todaysLowTemp = this.weatherdata.main.temp_min;
        this.humidity = this.weatherdata.main.humidity;
        this.pressure = this.weatherdata.main.pressure;
        this.sunrise = this.weatherdata.sys.sunrise;
        this.sunset = this.weatherdata.sys.sunset;
        this.weatherdata.weather.map(arrayData => {
          this.currentWeatherDescription = arrayData.description;
        });
      }, err => {
        console.log(err);
      });
  }

  weeklyWeatherReport() {
    this.router.navigate(['/weeklyWeather']);
  }
}

