import { NgModule, ModuleWithProviders }      from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { CommonModule }        from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {ReactiveFormsModule } from '@angular/forms';
import {MyFilterPipe} from './myFilterPipe';
import {ErgastAPIservice} from './ergastAPIservice';
import {DataService} from './dataService';

import {CanDeactivateGuard} from './can-deactivate-guard.service';

@NgModule({
  imports: [HttpModule, JsonpModule, FormsModule, ReactiveFormsModule],
  declarations:[MyFilterPipe],
  exports: [CommonModule, FormsModule, MyFilterPipe, FormsModule, ReactiveFormsModule]  
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ErgastAPIservice, DataService, CanDeactivateGuard ]
    };
  } 
 }
