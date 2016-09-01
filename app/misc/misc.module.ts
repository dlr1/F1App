import { NgModule }      from '@angular/core';


import {DefaultMiscComponent} from './misc';

import {miscSampleRoutes} from './misc.routing';
import {SharedModule} from '../shared/shared.module';
import {MiscHostComponent, MyComponent, MyComponentHeader, MyComponentActions, MyComponentContent} from './miscHost';
import {DynamicComponent, HelloComponent} from './dynamicComponent';


@NgModule({
  imports:      [SharedModule, miscSampleRoutes],
  entryComponents:[],
  declarations: [DefaultMiscComponent, HelloComponent, MiscHostComponent, MyComponent, 
                      MyComponentHeader, MyComponentActions, MyComponentContent, DynamicComponent]
      
})
export class MiscSamplesModule { }
