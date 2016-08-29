import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import {RouterLink} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import {CanComponentDeactivate} from '../shared/can-deactivate-guard.service';

class Mop{
  Id:string;
  MopTypeId:string;
  Title:string;
  Description:string;
  StatusId:string;
  EquipmentId:string;
  CategoryId:string;
  ImpactId:string;  
  Dispatch:boolean;
  IntendedForCertification: boolean
}

@Component({  
  moduleId: module.id,
  templateUrl:'./reactiveForm.template.html'      
})

export class ReactiveFormComponent implements CanComponentDeactivate { 
  private mopForm:FormGroup;
  private mop = new Mop();
  private metadata;
  private validImpactTypesForMop = [];
  private boolFlags = ['Yes','No']
  constructor(private route:ActivatedRoute, private dataService: DataService, private formBuilder:FormBuilder){

  }

  canDeactivate(){
    if (this.mopForm.touched)
      return confirm('Do you want to cancel changes');
      
    return true;
  }
  
  initializeForm(){
    this.mopForm = this.formBuilder.group({
      Id:'',
      MopTypeId:['', Validators.required],
      Title:['', Validators.required],
      Description:['', Validators.required],
      StatusId:['', Validators.required],
      EquipmentId:['', Validators.required],
      CategoryId:['', Validators.required],
      ImpactId:['', Validators.required],      
      Dispatch:false,
      IntendedForCertification:false
    });
  }

  ngOnInit(){        
    this.metadata = this.route.snapshot.data['MopMetadataResolve']; 
    this.initializeForm();    
    this.validImpactTypesForMop = this.metadata.Impacts;                  
    this.dataService.getMOP().subscribe(
        x=>{
          //this.mop = x;
          this.mopForm.setValue({   Id:x.Id,
              MopTypeId:x.MopTypeId,
              Title:x.Title,
              Description:x.Description,
              StatusId:x.StatusId,
              EquipmentId:x.EquipmentId,
              CategoryId:x.CategoryId,
              ImpactId:x.ImpactId,      
              Dispatch:x.Dispatch == true ? 'Yes' : 'No',
              IntendedForCertification:x.IntendedForCertification},true);
          
        }
    )     
  }

  
}

 
