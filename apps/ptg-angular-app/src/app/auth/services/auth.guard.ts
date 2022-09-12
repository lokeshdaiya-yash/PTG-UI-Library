/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Guard Auth Guard;
 * @description This guard for authentication
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  getUser: any

  constructor(private authSvc: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.getUser = JSON.parse(this.authSvc.getToken())?.user;
    // conditions used to authenticate whether the admin or other users
    return true;
    if(!this.authSvc.getToken()){
      this.router.navigate(['/login']);
      return false;
    }else if (this.getUser?.role?.type != 'admin' ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
