import {Routes, RouterModule } from '@angular/router';
import { teamRoutes }            from './team/team.routing';
import { raceRoutes }            from './race/race.routing';
//import { formSampleRoutes}            from './formSamples/forms.routing';
import {PageNotFoundComponent} from './pagenotfound';

// following is for loading all the modules eagerly
// const appRoutes: Routes = [  
//   {path: '',redirectTo: 'drivers',pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent }  
// ];

const appRoutes: Routes = [  
  {path: '',redirectTo: 'misc',pathMatch: 'full'},  
  {path:'races', loadChildren:'app/race/race.module'},
  {path:'teams', loadChildren:'app/team/team.module'},
  {path: '**', component: PageNotFoundComponent }  
];


export const routing = RouterModule.forRoot(appRoutes);
