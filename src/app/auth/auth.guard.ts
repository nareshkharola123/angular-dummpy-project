import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
  | boolean
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree>
  {

    return this.authService.user.pipe(
      take(1),
      map(
        user => {
          const isAuthenticated = !!user;
          if(isAuthenticated){
            return true
          }
          return this.router.createUrlTree(['/login'])
        }
      )
    )
  }
}
