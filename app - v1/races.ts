import { Component } from '@angular/core';
import {ErgastAPIservice} from './ergastAPIservice';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'races',
  moduleId: module.id,
  templateUrl: 'races.template.html'    
})
export class RacesComponent { 
    pastRaces;    
    raceList;
    tempRaceList;
    private sub: Subscription;
    constructor(private route: ActivatedRoute, private router: Router, private ergastAPIservice: ErgastAPIservice) {
         ergastAPIservice.onSearchChanged.subscribe(x=>{
          this.raceList = this.tempRaceList.filter(y=>y.Circuit.circuitName.indexOf(x) > -1 
                                        || y.Results[0].Driver.familyName > -1
                                        || y.raceName > -1)          
        }
      )
    }

    ngOnInit(){
       this.ergastAPIservice.getRaceWinners()
                            .subscribe(
                            response => 
                                {                                    
                                    this.pastRaces = response.MRData.RaceTable.Races;
                                     this.ergastAPIservice.getRaces()
                                            .subscribe(
                                            response => 
                                                {                                    
                                                    this.tempRaceList = this.raceList = response.MRData.RaceTable.Races;
                                                    this.pastRaces.forEach((x,i)=>this.tempRaceList[i].Results = x.Results)                            
                                                },
                                            error =>  {});
                                },
                            error =>  {});

       
            
    }
     
}

 
