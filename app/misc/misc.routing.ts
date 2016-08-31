import {RouterModule } from '@angular/router';

import {DefaultMiscComponent} from './misc';
import {MiscHostComponent} from './miscHost';

export const miscSampleRoutes = RouterModule.forChild([ 
     {
        path: 'misc',
        component: DefaultMiscComponent,
        children: [
          { path: '',  redirectTo:'host' },                   
          { path: 'host',  component: MiscHostComponent }
        ]
      }
  ]);

