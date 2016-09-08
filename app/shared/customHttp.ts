import { Response,Jsonp,Http, RequestOptionsArgs, BaseRequestOptions, Headers  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'username':'tester'
    });
}

@Injectable()
export class CustomHttp extends Http{
    get(url: string, options?: RequestOptionsArgs): Observable<Response>{
        console.log('url:' + url);
        return super.get(url, options);
    }
}