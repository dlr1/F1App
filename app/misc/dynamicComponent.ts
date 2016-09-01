import { Component, Input,ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, Compiler } from '@angular/core';

@Component({
  selector: 'hello',
  providers: [],
  template: `<h1>{{message}}!</h1>`
})
export class HelloComponent {
  @Input() message:string = "defaultValue";
  constructor() {
  }
}

@Component({
  selector: 'dynamic-comp',
  providers: [],
  template: `<div>
      <h2>Dynamicaly Add Elements</h2>
      <input #val type="text">
      <button (click)="addItem(val.value)">add hello</button>      
      <div #placeholder></div>
    </div>`,
    entryComponents:[HelloComponent]  
})
export class DynamicComponent {
   @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
  private componentFactory: ComponentFactory<any>;
  
  constructor(componentFactoryResolver: ComponentFactoryResolver, compiler: Compiler) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(HelloComponent);    
  }
  
  addItem(val) {
    var cmpRef = this.viewContainerRef.createComponent(this.componentFactory, 0);
    cmpRef.instance.message = val;
    //cmpRef.instance.someObservable.subscribe(val => this.val = val);
    
  }
}
