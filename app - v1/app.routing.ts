import {Routes, RouterModule } from '@angular/router';

import {PageNotFoundComponent} from './pagenotfound';
import {DriversComponent} from './drivers';
import {DriverComponent} from './driver';
import {TeamsComponent} from './teams';
import {TeamComponent} from './team';
import {RacesComponent} from './races';
import {RaceComponent} from './race';
const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/drivers',
  pathMatch: 'full'
},
{path:'drivers', component:DriversComponent},
{path:'driver/:id', component:DriverComponent},
{path:'teams', component:TeamsComponent},
{path:'team/:id', component:TeamComponent},
{path:'races', component:RacesComponent},
{path:'race/:id', component:RaceComponent},
{ path: '**', component: PageNotFoundComponent }
  
];


export const routing = RouterModule.forRoot([...appRoutes]);
