import {NgModule, APP_INITIALIZER, Injectable, OpaqueToken}      from '@angular/core';
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
import {DataService} from './shared/dataService';

import {AuxComponent} from './auxComponent';

@Injectable()
export class ConfigService {

        constructor(private _dataService: DataService) {
          _dataService.someVar = 'this is set in the configureservice when app is initialized';
        }  

        load(): Promise<string> {            
          console.log('configservice called')
            return Promise.resolve('this is some config');
        }
    }

@NgModule({
  imports:      [ BrowserModule, routing,  DriverModule, FormSamplesModule, MiscSamplesModule, SharedModule.forRoot()],
  declarations: [ AppComponent,  PageNotFoundComponent, AuxComponent ],
  providers:[ConfigService, DataService,
    { provide: APP_INITIALIZER,
              useFactory: (config: ConfigService) => () => config.load(),
              deps: [ConfigService, DataService], 
              multi: true }    
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


