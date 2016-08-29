import { Injectable, EventEmitter } from '@angular/core';
import { Response,Jsonp, Http } from '@angular/http';

@Injectable()
export class DataService{
    constructor(private http:Http){}
        
    getMetadata(){
        return this.http.get('app/shared/metadata.json').map(x=>x.json());
    }
    getMOP(){
        return this.http.get('app/shared/mop.json').map(x=>x.json());
    }
}