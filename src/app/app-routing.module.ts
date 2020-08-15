import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from '../app/current-weather/current-weather.component';
import { WeeklyWeatherComponent } from '../app/weekly-weather/weekly-weather.component';

const routes: Routes = [
{ path: 'currentweather', component: CurrentWeatherComponent },
{ path: 'weeklyWeather', component: WeeklyWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
