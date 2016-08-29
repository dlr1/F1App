import { Component } from '@angular/core';
import {ErgastAPIservice} from './ergastAPIservice';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'team',
  moduleId: module.id,
  templateUrl: 'team.template.html'    
})
export class TeamComponent { 
    team = {};
    races = [];
    driver = {};
    driver1Code;
    driver2Code;
    private sub: Subscription;
    constructor(private route: ActivatedRoute, private router: Router, private ergastAPIservice: ErgastAPIservice) {}

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.ergastAPIservice.getTeamDetails(id)  
                            .subscribe(
                            response => 
                                {                                    
                                this.team = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
                                console.log(this.team); 
                                },
                            error =>  {});
             this.ergastAPIservice.getTeamRaces(id)  
                            .subscribe(
                            response => 
                                {                                    
                                 
                                response.MRData.RaceTable.Races.forEach(race=>race.points = parseInt(race.Results[0].points) + parseInt(race.Results[1].points));
                                this.races = response.MRData.RaceTable.Races;
                                this.driver1Code = this.races[0].Results[0].Driver.familyName;
                                this.driver2Code = this.races[0].Results[1].Driver.familyName;
                                },
                            error =>  {});
        });

    
    }
   
   ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

 
