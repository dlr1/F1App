import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component(
    {
        selector:'checkbox-list',
        template:
        `
            <label style="padding-right:20px">{{label}}</label>
            <label *ngFor="let item of items" style="padding-right:10px">
            <input type="checkbox" value="{{item[valueField]}}" 
                [checked]="isChecked(item[valueField])" (click)="toggleSelection(item[valueField])" >{{item[displayField]}}
            </label>
        `,
        providers: [
                    { 
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => CheckboxListComponent),
                    multi: true
                    }
        ]
    }
)
export class CheckboxListComponent implements ControlValueAccessor{
    @Input() items:Array<any>;
    @Input() label:string;
    @Input() valueField:string;
    @Input() displayField:string;

    value:Array<any>;
    propagateChange = (_: any) => {};

    display(item){
        return item[this.displayField];
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value;
        }
    }     

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    isChecked(value){            
            if (this.value == null)
                return false;
            else{
                return this.value.indexOf(value) > -1;
            }
        }

        toggleSelection(t) {            
            if (this.value == null)
                this.value = [];

            let idx = this.value.indexOf(t);
         
         // is currently selected
         if (idx > -1) {
            this.value.splice(idx, 1);                    
         } 
         // is newly selected
         else {
            this.value.push(t);
         }

        this.propagateChange(this.value);
       }
}
