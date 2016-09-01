import {RouterModule } from '@angular/router';

import {DefaultMiscComponent} from './misc';
import {MiscHostComponent} from './miscHost';
import {DynamicComponent} from './dynamicComponent';
export const miscSampleRoutes = RouterModule.forChild([ 
     {
        path: 'misc',
        component: DefaultMiscComponent,
        children: [
          { path: '',  redirectTo:'dynComp' },                   
          { path: 'host',  component: MiscHostComponent },
          { path: 'dynComp',  component: DynamicComponent }
        ]
      }
  ]);

