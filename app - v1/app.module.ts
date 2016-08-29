import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing} from './app.routing';

import { AppComponent }  from './app';
import {DriversComponent} from './drivers';
import {DriverComponent} from './driver';
import {PageNotFoundComponent }  from './pagenotfound';
import {TeamsComponent} from './teams';
import {RacesComponent} from './races';
import {RaceComponent} from './race';
import {TeamComponent} from './team';
import {ErgastAPIservice} from './ergastAPIservice';

@NgModule({
  imports:      [ BrowserModule, routing,  FormsModule, HttpModule, JsonpModule],
  declarations: [ AppComponent,  DriversComponent, DriverComponent, PageNotFoundComponent, TeamsComponent, TeamComponent, RacesComponent, RaceComponent],  
  providers:[ErgastAPIservice],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
