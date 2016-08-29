import {RouterModule } from '@angular/router';

import {RacesComponent} from './races';
import {RaceComponent} from './race';

export const raceRoutes = RouterModule.forChild([
  { path: '', redirectTo: 'races', pathMatch: 'full'},
        {path:'races', component:RacesComponent},
        {path:'race/:id', component:RaceComponent},  
  ]);
