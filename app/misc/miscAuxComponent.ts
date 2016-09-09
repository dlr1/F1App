import {Component} from '@angular/core';

@Component({
    template:'<div style="margin-top:20px;height:100px;background-color:lightgreen">{{message}}</div>'
})
export class MiscAuxComponent{

    message:string  = "this is in aux component in misc module"

}
