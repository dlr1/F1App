import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {Http} from '@angular/http';
import {DynamicFormVariableComponent} from './ccFormTypes';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

class Value{
  value:string;
}
class Variable{
  type:string;
  name:string;
  regexName:string;
  required:boolean;
  placeholder:string;
  values:Array<Value>;
}
  
class Snippet{
  text:string;
}

class Command{
  id:number;
  name:string;
  snippets:Array<Snippet>;
  variables:Array<Variable>;
}


@Component({  
  moduleId: module.id,
  templateUrl: 'ccForm.template.html'    
})
export class CCFormComponent {
   @ViewChild('dynamicChild', {read: ViewContainerRef})
   private target: ViewContainerRef; 
   commandData;
   ccForm:FormGroup;
   variables;
   constructor(private fb:FormBuilder, private http:Http, private componentFactoryResolver  : ComponentFactoryResolver ) {

     this.ccForm = this.fb.group({
   
    });     
   };
     
     toFormGroup(vs ) {
    let group: any = {};

    vs.forEach(v => {
      group[v.variable] = v.required ? new FormControl(v.value || '', Validators.required)
                                              : new FormControl(v.value || '');
    });
    return new FormGroup(group);
  }

    ngOnInit(){
       this.http.get('app/formSamples/commands.json')
          .subscribe(x=>
              {
                this.commandData = x.json();
              
                this.variables = this.commandData.commands[0].variables;
              
                this.ccForm = this.toFormGroup(this.variables);
                // let compFactory = this.componentFactoryResolver.resolveComponentFactory(FormTextboxComponent);
               

                // const ref = this.target.createComponent(compFactory);
                // ref.instance.data = variables[0];
                // ref.changeDetectorRef.detectChanges();
                        
                //         variables = this.commandData.commands[0].variables;
                
                //  let compFactory1 = this.componentFactoryResolver.resolveComponentFactory(FormCheckboxComponent);
               

                //  let ref1 = this.target.createComponent(compFactory1);
                // ref1.instance.data = variables[1];
                // ref1.changeDetectorRef.detectChanges();

              }
          );
    }
   
  
}

 
