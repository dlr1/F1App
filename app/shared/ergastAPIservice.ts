import { Injectable, EventEmitter } from '@angular/core';
import { Response,Jsonp } from '@angular/http';


@Injectable()
export class ErgastAPIservice{
    onSearchChanged: EventEmitter<string>;
    constructor(private jsonp:Jsonp){
        this.onSearchChanged = new EventEmitter<string>();        
        console.log('service created...')
    }

    getDrivers() {
      return this.jsonp.get('http://ergast.com/api/f1/2013/driverStandings.json?callback=JSONP_CALLBACK').map(res=>res.json());
    }

    getDriverDetails(id) {
      return this.jsonp.get('http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSONP_CALLBACK').map(res=>res.json());      
    }

    getDriverRaces(id) {
      return this.jsonp.get('http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSONP_CALLBACK').map(res=>res.json());      
    }

    getTeams() {
      return this.jsonp.get('http://ergast.com/api/f1/2013/constructorStandings.json?callback=JSONP_CALLBACK').map(res=>res.json());
    }

    getTeamDetails(id) {
     return this.jsonp.get('http://ergast.com/api/f1/2013/constructors/'+ id +'/constructorStandings.json?callback=JSONP_CALLBACK').map(res=>res.json());
    }

    getTeamRaces(id) {
      return this.jsonp.get('http://ergast.com/api/f1/2013/constructors/'+ id +'/results.json?callback=JSONP_CALLBACK').map(res=>res.json());      
    }

    getRaceWinners() {
      return this.jsonp.get('http://ergast.com/api/f1/2013/results/1.json?callback=JSONP_CALLBACK').map(res=>res.json());      
    }

    getRaces() {
      return this.jsonp.get('http://ergast.com/api/f1/2013.json?callback=JSONP_CALLBACK').map(res=>res.json());      
    }

    getRaceDetails(id) {
      return this.jsonp.get('http://ergast.com/api/f1/2013/'+ id +'/results.json?callback=JSONP_CALLBACK').map(res=>res.json());      
    }

    getQualiDetails(id) {
      return this.jsonp.get('http://ergast.com/api/f1/2013/'+ id +'/qualifying.json?callback=JSONP_CALLBACK').map(res=>res.json());     
    }  
}
   