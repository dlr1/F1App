import {RouterModule } from '@angular/router';

import {DriversComponent} from './drivers';
import {DriverComponent} from './driver';

export const driverRoutes = RouterModule.forChild([ 
    {path:'drivers', component:DriversComponent},
    {path:'driver/:id', component:DriverComponent},  
  ]);

