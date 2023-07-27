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
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  getUser: any

  constructor(private authSvc: AuthService, private router: Router) { 
    this.getUser = this.authSvc.getToken();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // conditions used to authenticate whether the admin or other users
    if(!this.authSvc.getToken()){
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
 