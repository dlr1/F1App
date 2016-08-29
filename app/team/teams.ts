import { Component } from '@angular/core';
import { ErgastAPIservice } from '../shared/ergastAPIservice';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'teams',
  moduleId: module.id,
  templateUrl: 'teams.template.html'    
})
export class TeamsComponent { 
    teamList;    
    tempTeamList;
    private sub: Subscription;
    constructor(private route: ActivatedRoute, private router: Router, private ergastAPIservice: ErgastAPIservice) {
         ergastAPIservice.onSearchChanged.subscribe(x=>{
          this.teamList = this.tempTeamList.filter(y=>y.Constructor.name.indexOf(x) > -1)
          console.log(x);
        }
      )
    }

    ngOnInit(){
       this.ergastAPIservice.getTeams()
                            .subscribe(
                            response => 
                                {                                    
                                this.tempTeamList = this.teamList = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;                                
                                },
                            error =>  {});
            
    }
     
}

 
