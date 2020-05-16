import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from './auth.service';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authSerivce: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler ){

    return this.authSerivce.user.pipe(
      take(1),
      exhaustMap(user => {
        if(user){
          const modifiedReq = req.clone({
            params: new HttpParams().set('auth', user.token)
          });
          return next.handle(modifiedReq);
        }
        return next.handle(req);
      })
    )
  }

}
