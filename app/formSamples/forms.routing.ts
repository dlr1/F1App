import {RouterModule } from '@angular/router';

import {DefaultFormComponent} from './form';
import {ReactiveFormComponent} from './reactiveForm';
import {TemplateFormComponent} from './templateForm';
import {FormControlsUsageComponent} from './formControlsUsage';
import {FormControlsUsageComponent1} from './formControlsUsage1';
import {CCFormComponent} from './CCFormComponent';
import {CanDeactivateGuard} from '../shared/can-deactivate-guard.service';
import {MopMetadataResolve} from './mopMetadataResolve';

export const formSampleRoutes = RouterModule.forChild([ 
     {
        path: 'forms',
        component: DefaultFormComponent,
        children: [
          { path: '',  redirectTo:'fc1' },
          { path: 'reactive',  component: ReactiveFormComponent, canDeactivate: [CanDeactivateGuard], resolve:{MopMetadataResolve} },          
          { path: 'template',  component: TemplateFormComponent },
          { path: 'ccForm',  component: CCFormComponent },
          { path: 'fc',  component: FormControlsUsageComponent },            
          { path: 'fc1',  component: FormControlsUsageComponent1 }
        ]
      }
  ]);

