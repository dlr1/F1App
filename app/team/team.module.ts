import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
// import {HttpModule, JsonpModule} from '@angular/http';

import {TeamsComponent} from './teams';
import {TeamComponent} from './team';
import {teamRoutes} from './team.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports:      [SharedModule, teamRoutes],
  declarations: [TeamsComponent, TeamComponent]    
})

// for eager loading 
//export class TeamModule { }

// for lazy loading
export default class TeamModule { }