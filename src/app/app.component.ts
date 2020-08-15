import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'weather-app';
  
  constructor() { }

 
}
