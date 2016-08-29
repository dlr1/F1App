import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
// import {HttpModule, JsonpModule} from '@angular/http';

import {DriversComponent} from './drivers';
import {DriverComponent} from './driver';
import {driverRoutes} from './driver.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports:      [SharedModule, driverRoutes],
  declarations: [DriversComponent, DriverComponent]    
})
export class DriverModule { }
