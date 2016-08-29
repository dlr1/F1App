import { Component } from '@angular/core';
import {ErgastAPIservice} from './ergastAPIservice';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'drivers',
  moduleId: module.id,
  templateUrl: 'drivers.template.html'    
})
export class DriversComponent { 
  filterName = null;
  driversList = [];
  tempDriversList = [];
  constructor(private ergastAPIservice: ErgastAPIservice){
      ergastAPIservice.onSearchChanged.subscribe(x=>{
          this.driversList = this.tempDriversList.filter(y=>y.Driver.givenName.indexOf(x) > -1 || y.Driver.familyName.indexOf(x) > -1)
          console.log(x);
        }
      )
  }

  ngOnInit(){
  this.ergastAPIservice.getDrivers()  
                      .subscribe(
                        response => 
                          {                    
                            this.tempDriversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;      
                            this.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings
                          },
                        error =>  {});
  }
  
}

 
