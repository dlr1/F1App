import { NgModule }      from '@angular/core';


import {DefaultMiscComponent} from './misc';

import {miscSampleRoutes} from './misc.routing';
import {SharedModule} from '../shared/shared.module';
import {MiscHostComponent, MyComponent, MyComponentHeader, MyComponentActions, MyComponentContent} from './miscHost';
import {DynamicComponent, HelloComponent} from './dynamicComponent';
import {ObsComponent} from './obsComponent';

import {MiscAuxComponent} from './miscAuxComponent';

@NgModule({
  imports:      [SharedModule, miscSampleRoutes],
  entryComponents:[],
  declarations: [DefaultMiscComponent, HelloComponent, MiscHostComponent, MyComponent, MiscAuxComponent,
                      MyComponentHeader, MyComponentActions, MyComponentContent, DynamicComponent, ObsComponent]   ,
  exports:[MiscAuxComponent]   
})

export class MiscSamplesModule { }
