import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { AuthenticateService } from '../services/authenticate.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(
        private snackbarService: SnackbarService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request).pipe(catchError(resp => {
            if (resp && resp.status && resp.status === 401) {
                this.snackbarService.warning('Please log in to the system again, thanks！');
            } else {
                this.error(resp);
            }
            return throwError(resp);
        }));
    }

    private error(resp) {
        let message = 'An internal server error.';
        console.log(resp);
        if (resp && resp.error && resp.error.message) {
            message = resp.error.message;
        }
        this.snackbarService.warning(message);
    }
}
