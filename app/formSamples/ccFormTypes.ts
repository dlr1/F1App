import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component(
    {
        selector:'df-variable',
        template:`      
        <div [formGroup]="form">
            <div [ngSwitch]="data.type">
                <input *ngSwitchCase="'form-text'" [formControlName]="data.variable" 
                        [id]="data.variable" [placeholder]="data.placeholder">
                <div *ngSwitchCase="'form-checkbox'" >
                <input type="hidden"  [formControlName]="data.variable">
                    <label>
                        <input [checked]="data.values[0].value !== data.unchecked" 
                        (change)="toggle($event, form, data.variable, data)"
                         type="checkbox">{{data.label}}
                    </label>                        
                 </div>
            </div>          
        </div>     
        `,        
    }
)
export class DynamicFormVariableComponent {
    @Input() data: any;
    @Input() form: FormGroup;

   toggle(evt, form, controlName, data){
        let checked = evt.target.checked;
        let ctrl = form.controls[controlName];
        ctrl.setValue(checked ? data.checked : data.unchecked);                
    }

}

