import {RouterModule } from '@angular/router';

import {TeamsComponent} from './teams';
import {TeamComponent} from './team';

export const teamRoutes = RouterModule.forChild([  
  { path: '', redirectTo: 'teams', pathMatch: 'full'}, //need this line , if the module is being lazy loaded
        {path:'teams', component:TeamsComponent},
        {path:'team/:id', component:TeamComponent},
  ]);

