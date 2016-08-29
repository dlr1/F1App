import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

export interface User {
    name: string; // text
    age?: number; // number
    gender?: string; // radio
    role?: string; // select (primitive)
    theme?: Theme; // select (object)
    topics?: string[]; // multiple select 
    isActive?: boolean; // checkbox
    toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
}

// theme.interface.ts

export interface Theme {
    display: string;
    backgroundColor: string;
    fontColor: string;
}

@Component(
    {
        moduleId:module.id,
        selector:'fc',
        templateUrl:'FormControlsUsage.template.html' 
    }
)
export class FormControlsUsageComponent {
   
    public genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];
    public roles = [
        { value: 'admin', display: 'Administrator' },
        { value: 'guest', display: 'Guest' },
        { value: 'custom', display: 'Custom' }
    ];
    public themes: Theme[] = [
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

    user:User;
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
    }
    
    isChecked(value){
        return this.user.topics.indexOf(value)>-1;
    }
    toggleSelection(t) {
     var idx = this.user.topics.indexOf(t);
 
     // is currently selected
     if (idx > -1) {
        this.user.topics.splice(idx, 1);
     } 
     // is newly selected
     else {
        this.user.topics.push(t);
     }
   };
}

