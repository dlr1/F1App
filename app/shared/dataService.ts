import { Injectable, EventEmitter } from '@angular/core';
import { Response,Jsonp, Http } from '@angular/http';

@Injectable()
export class DataService{
    _someVar = 'default Value';
    constructor(private http:Http){        
        console.log(this._someVar);
    }

    set someVar(val){
        this._someVar = val;
        console.log(this._someVar);
    }  
    getMetadata(){
        console.log(this._someVar);
        return this.http.get('app/shared/metadata.json').map(x=>x.json());
    }
    getMOP(){
        return this.http.get('app/shared/mop.json').map(x=>x.json());
    }
}