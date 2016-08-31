import {Directive, HostListener, HostBinding, Component, ElementRef, Renderer } from '@angular/core';


@Directive({selector: '[directive1]',
 host: {   
    '(mousedown)': '_setMousedown()',    
    '(mouseup)': '_setMouseup()'   
  }})
export class MyDirective1 {
  numClicks:any = 0;
  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  @HostBinding('attr.value') value = 'default value'; 
  @HostBinding('class.valid') isValid:boolean = false;
  @HostListener('click') onClick() {
   this.numClicks = this.numClicks + 1;
   this.value = this.numClicks;
   this.isValid = this.numClicks > 4; 
  }
   _setMousedown() {    
      console.log('mouse down');     
    }

  _setMouseup() {    
      console.log('mouse up');
    }
    
  // returns the control on which this directive is added
  getHostElement() {
    console.log(this._elementRef.nativeElement);
      return this._elementRef.nativeElement;
    }

}
