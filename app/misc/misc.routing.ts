import {RouterModule } from '@angular/router';

import {DefaultMiscComponent} from './misc';
import {MiscHostComponent} from './miscHost';
import {DynamicComponent} from './dynamicComponent';
import {ObsComponent} from './obsComponent';
import {MiscAuxComponent} from './miscAuxComponent';

export const miscSampleRoutes = RouterModule.forChild([ 
     {
        path: 'misc',
        component: DefaultMiscComponent,
        children: [
          { path: '',  redirectTo:'obs' },                  
          { path: 'host',  component: MiscHostComponent },
          { path: 'dynComp',  component: DynamicComponent },
          { path: 'obs',  component: ObsComponent }
        ]
      }
  ]);

