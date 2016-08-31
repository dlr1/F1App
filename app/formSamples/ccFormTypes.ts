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
                            <label *ngFor="let o of data.options">
                                <input #f [formControlName]="data.variable" type="checkbox" (click)="toggleSelection($event, data, f)"                               
                                        [name]="data.variable">{{o.label}}
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

    toggleSelection(evt, data,f){
        if (evt.target.checked)
            data.variable = data.checked;
        else
            data.variable = data.unchecked;
    }

}

