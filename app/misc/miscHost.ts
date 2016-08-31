import { Component, ElementRef, Renderer, Directive } from '@angular/core';

import {FormControl} from '@angular/forms';

import {RouterLink} from '@angular/router';

@Directive({
  selector:'my-comp-header'
})
export class MyComponentHeader{}

@Directive({
  selector:'my-comp-actions' 
})
export class MyComponentActions{}

@Component({
  selector:'my-comp',
  template:`
    <div>
      <div style='font-weight:bold;background-color:green;color:white'>
        <ng-content select='my-comp-header'></ng-content>
      </div>        
      <div style="height:100px">
        <ng-content select="my-comp-content"></ng-content>
      </div>   
      <div>
        <ng-content select='my-comp-actions'></ng-content>
      </div>
       
  </div>`
})
export class MyComponent{

}

@Component({
  selector: 'misc-host',
  moduleId: module.id,
  templateUrl:'./miscHost.template.html',
  styles:[
    '.valid {border: 2px solid red;font-weight:bold}'
  ]
 
})
export class MiscHostComponent {

    
}

 
