import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';

export interface ForecastElement {
  day: Date;
  temp: string;
  decsription: string;
  humidity: string;
}

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent implements OnInit {
  weekForecast: any;
  displayedColumns: string[] = ['day', 'temp', 'decsription', 'humidity'];
  dataSource = new MatTableDataSource<ForecastElement>();
  @ViewChild(MatSort) sort: MatSort;
  arrayWeather: any[];
  weatherDate: any;
  abcd: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeeklyList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getWeeklyList() {
    this.weatherService.getForecast('Pune')
      .subscribe(result => {
        console.log('result', result)
        this.abcd = result;
        this.weekForecast = this.abcd.daily;
        this.dataSource = new MatTableDataSource<ForecastElement>(this.weekForecast);
        this.dataSource.sort = this.sort;
      });
  }
}
