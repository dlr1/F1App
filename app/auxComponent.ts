import {Component} from '@angular/core';

@Component({
    template:'<div style="margin-top:20px;height:100px;background-color:lightgreen">{{message}}</div>'
})
export class AuxComponent{

    message:string  = "this is in aux component in app module"

}
