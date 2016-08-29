import { NgModule }      from '@angular/core';

import {DynamicFormVariableComponent} from './ccFormTypes';
import {DefaultFormComponent} from './form';

import {formSampleRoutes} from './forms.routing';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormComponent} from './reactiveForm';
import {TemplateFormComponent} from './templateForm';
import {FormControlsUsageComponent} from './formControlsUsage';
import {FormControlsUsageComponent1} from './formControlsUsage1';
import {CCFormComponent} from './CCFormComponent';
import {MopMetadataResolve} from './mopMetadataResolve';


@NgModule({
  imports:      [SharedModule, formSampleRoutes],
  entryComponents:[DynamicFormVariableComponent],
  declarations: [DefaultFormComponent, ReactiveFormComponent, DynamicFormVariableComponent, 
                      TemplateFormComponent, FormControlsUsageComponent, FormControlsUsageComponent1, CCFormComponent],
  providers:[MopMetadataResolve]
      
})
export class FormSamplesModule { }
