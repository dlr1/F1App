import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CheckboxListComponent} from '../shared/checkboxList';

interface User1 {
    name: string; // text
    age?: number; // number
    gender?: string; // radio
    role?: string; // select (primitive)
    theme?: Theme1; // select (object)
    topics?: string[]; // multiple select 
    isActive?: boolean; // checkbox
    toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
    browsers?:string[];
}

// theme.interface.ts

interface Theme1 {
    display: string;
    backgroundColor: string;
    fontColor: string;
}

@Component(
    {
        moduleId:module.id,
        selector:'fc1',
        templateUrl:'FormControlsUsage1.template.html' ,
        directives:[CheckboxListComponent]
    }
)
export class FormControlsUsageComponent1 {
    public browsers = [
        { value: 'Firefox', display: 'Firefox' },
        { value: 'Chrome', display: 'Chrome' },
        { value: 'IE', display: 'Internet Explorer' },
        { value: 'Edge', display: 'Edge' }
    ];

    public genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];
    public roles = [
        { value: 'admin', display: 'Administrator' },
        { value: 'guest', display: 'Guest' },
        { value: 'custom', display: 'Custom' }
    ];
    public themes: Theme1[] = [
        { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
        { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
        { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
    ];
    public topics = [
        { value: 'game', display: 'Gaming' },
        { value: 'tech', display: 'Technology' },
        { value: 'life', display: 'Lifestyle' },
    ];
    public toggles = [
        { value: 'toggled', display: 'Toggled' },
        { value: 'untoggled', display: 'UnToggled' },
    ];

    user:User1;
    userForm:FormGroup;
    constructor(private fb:FormBuilder){}

    ngOnInit(){
        this.user = {
            name: '',            
            gender: this.genders[0].value, // default to Female
            role: null,
            theme: this.themes[0], // default to dark theme
            isActive: false,
            toggle: this.toggles[1].value, // default to untoggled
            topics: [this.topics[1].value] // default to Technology
        }
         this.userForm = this.fb.group({
                                    name:'',
                                    gender:'',
                                    age:'',
                                    role:'',
                                    theme:'',
                                    isActive:'',
                                    toggle:'',
                                    topics:[],
                                    browsers:[]
                                });                                
    }
    
    toggle(evt){
        let checked = evt.target.checked;
        let ctrl = this.userForm.controls['toggle'];
        ctrl.setValue(checked ? this.toggles[0].value : this.toggles[1].value);        
    }

    isChecked(value){
        let ctrl = this.userForm.controls['topics'];
        if (ctrl.value == null)
            return false;
        else{
            return ctrl.value.indexOf(value) > -1;
          }
    }

    toggleSelection(t) {
        let ctrl = this.userForm.controls['topics']
        if (ctrl.value == null)
            ctrl.setValue([]);
        let idx = ctrl.value.indexOf(t);
     
     // is currently selected
     if (idx > -1) {
        ctrl.value.splice(idx, 1);
        ctrl.setValue(ctrl.value);        
     } 
     // is newly selected
     else {
        let q = ctrl.value;
        q.push(t);
        ctrl.setValue(q);
     }
   }
}

