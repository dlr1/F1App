import { Component } from '@angular/core';
import {ErgastAPIservice} from './ergastAPIservice';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'race',
  moduleId: module.id,
  templateUrl: 'race.template.html'    
})
export class RaceComponent { 
   raceResult;
   qualiResult;
   race;
    private sub: Subscription;
    constructor(private route: ActivatedRoute, private router: Router, private ergastAPIservice: ErgastAPIservice) {}

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.ergastAPIservice.getRaceDetails(id)  
                            .subscribe(
                            response => 
                                {                                    
                                this.race = response.MRData.RaceTable.Races[0];
                                this.raceResult = response.MRData.RaceTable.Races[0].Results;
                                },
                            error =>  {});
             this.ergastAPIservice.getQualiDetails(id)  
                            .subscribe(
                            response => 
                                {                                    
                                    this.qualiResult = response.MRData.RaceTable.Races[0].QualifyingResults;                               
                                },
                            error =>  {});
                            
        });

    
    }
   
   ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

 
