import { NgModule }      from '@angular/core';


import {DefaultMiscComponent} from './misc';

import {miscSampleRoutes} from './misc.routing';
import {SharedModule} from '../shared/shared.module';
import {MiscHostComponent, MyComponent, MyComponentHeader, MyComponentActions} from './miscHost';
import {DynamicComponent, HelloComponent} from './dynamicComponent';


@NgModule({
  imports:      [SharedModule, miscSampleRoutes],
  entryComponents:[HelloComponent],
  declarations: [DefaultMiscComponent, MiscHostComponent, MyComponent, MyComponentHeader, MyComponentActions, DynamicComponent]
      
})
export class MiscSamplesModule { }
