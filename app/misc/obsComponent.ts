import { Component} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId:module.id,
    templateUrl:'obs.template.html'
})
export class ObsComponent{

    obs1:Observable<any>;
    mydata:Array<any> = [];
    mydata1 = [];
    mydata2 = [];
    mydata3 = [];
    concatData = [];
    isComplete = 'not complete';
    concatStatus = 'concat not done'
    constructor(){
        this.mydata.push(Observable.of([1,2,3,4,5]));        
        Observable.range(1,10).subscribe(x=>this.mydata1.push(x));        
    }

    ngOnInit(){
        let obs1 = Observable.interval(500).take(10);
        obs1.subscribe(x=>this.mydata2.push(x));

        let obs2 = Observable.interval(800).take(10);
        obs2.subscribe(x=>this.mydata3.push(x));

        Observable.forkJoin(obs1,obs2).subscribe(x=>this.isComplete="complete");
        let obs3 = Observable.range(20,30).delay(200).take(5);
        //obs3.subscribe(x=>this.concatData.push(x));

        let obs4 = Observable.range(15,20).delay(200).take(5);
        //obs4.subscribe(x=>this.concatData.push(x));

        // concats obs3 at the end of obs4
        Observable.concat(obs3,obs4).subscribe(x=> this.concatData.push(x));
    }


}