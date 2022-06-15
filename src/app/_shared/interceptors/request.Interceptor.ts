import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newRequest = request.clone({ url: request.url });
        
        /*
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });*/
        
        if (request.url.startsWith('/api')) {
            newRequest = request.clone({
                url: (environment.apiServer ? environment.apiServer : '') + request.url
            });
        }
        return next.handle(newRequest);
    }
}