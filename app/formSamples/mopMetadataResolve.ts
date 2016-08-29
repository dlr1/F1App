import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import { DataService } from '../shared/dataService';

@Injectable()
export class MopMetadataResolve implements Resolve<any> {
  constructor(private dataService: DataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
     return this.dataService.getMetadata();
  }
}
