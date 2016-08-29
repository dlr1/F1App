import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
// import {HttpModule, JsonpModule} from '@angular/http';

import {RacesComponent} from './races';
import {RaceComponent} from './race';
import {raceRoutes} from './race.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports:      [SharedModule, raceRoutes],
  declarations: [RacesComponent, RaceComponent]    
})

// for eager loading 
//export class RaceModule { }

// for lazy loading
export default class RaceModule { }
