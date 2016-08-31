import { NgModule }      from '@angular/core';


import {DefaultMiscComponent} from './misc';

import {miscSampleRoutes} from './misc.routing';
import {SharedModule} from '../shared/shared.module';
import {MiscHostComponent, MyComponent, MyComponentHeader, MyComponentActions} from './miscHost';



@NgModule({
  imports:      [SharedModule, miscSampleRoutes],
  entryComponents:[],
  declarations: [DefaultMiscComponent, MiscHostComponent, MyComponent, MyComponentHeader, MyComponentActions]
      
})
export class MiscSamplesModule { }
