import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './app.routing';

import {SharedModule} from './shared/shared.module';

import {DriverModule} from './driver/driver.module';
import {FormSamplesModule} from './formSamples/forms.module';
import {MiscSamplesModule} from './misc/misc.module';
// commented race and team modules to be lazy loaded
// import {RaceModule} from './race/race.module';
// import {TeamModule} from './team/team.module';

import {AppComponent}  from './app';
import {PageNotFoundComponent}  from './pagenotfound';

@NgModule({
  imports:      [ BrowserModule, routing,  DriverModule, FormSamplesModule, MiscSamplesModule, SharedModule.forRoot()],
  declarations: [ AppComponent,  PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
