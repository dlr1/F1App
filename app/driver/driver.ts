import { Component } from '@angular/core';
import { ErgastAPIservice } from '../shared/ergastAPIservice';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'driver',
  moduleId: module.id,
  templateUrl: 'driver.template.html'    
})
export class DriverComponent { 
 
    races = [];
    driver = {};
    private sub: Subscription;
    constructor(private route: ActivatedRoute, private router: Router, private ergastAPIservice: ErgastAPIservice) {
        this.ergastAPIservice.onSearchChanged.subscribe(x=>{console.log(x);});
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.ergastAPIservice.getDriverDetails(id)  
                            .subscribe(
                            response => 
                                {                                    
                                    this.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
                                },
                            error =>  {});
             this.ergastAPIservice.getDriverRaces(id)  
                            .subscribe(
                            response => 
                                {                                    
                                    this.races = response.MRData.RaceTable.Races; 
                                },
                            error =>  {});
        });

    
    }
   
   ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

 
