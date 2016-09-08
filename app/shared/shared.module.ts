import { NgModule, ModuleWithProviders }      from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { CommonModule }        from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {ReactiveFormsModule } from '@angular/forms';
import {MyFilterPipe} from './myFilterPipe';
import {ErgastAPIservice} from './ergastAPIservice';
import {DataService} from './dataService';
import {CheckboxListComponent} from './checkboxList';

import {CustomHttp, DefaultRequestOptions} from './customHttp';

import {MyDirective1} from './directive1';

import {CanDeactivateGuard} from './can-deactivate-guard.service';

import { Response,Jsonp,Http, RequestOptions,XHRBackend  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';


@NgModule({
  imports: [HttpModule, JsonpModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations:[MyFilterPipe, CheckboxListComponent, MyDirective1],
  exports: [CommonModule, FormsModule, MyFilterPipe, FormsModule, ReactiveFormsModule, CheckboxListComponent, MyDirective1]  
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ErgastAPIservice, DataService, CanDeactivateGuard,      
      {provide: RequestOptions, useClass: DefaultRequestOptions },
    {provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new CustomHttp(backend, defaultOptions), deps: [XHRBackend, RequestOptions]}
   ]
    };
  } 
 }
