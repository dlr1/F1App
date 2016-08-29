import { ElementRef, Component, EventEmitter,  AfterViewInit, ViewChild  } from '@angular/core';
import { ErgastAPIservice } from './shared/ergastAPIservice';
import * as rx from 'rxjs/rx';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.template.html'    
})
export class AppComponent { 
 @ViewChild('search')
  private search: ElementRef;
  
      constructor(private ergastAPIservice: ErgastAPIservice){

      }
      ngAfterViewInit() {
        rx.Observable
            .fromEvent(this.search.nativeElement, 'keyup')
            .debounceTime(200)
            .distinctUntilChanged()
            .subscribe(x=>{                
                this.ergastAPIservice.onSearchChanged.emit(this.search.nativeElement.value);
            });
      }
}

 