/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @nx/enforce-module-boundaries */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Guard login Guard;
 * @description This guard for login
 */

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  getUser: any;
  constructor(private authSvc: AuthService, private router: Router) {
    this.getUser = JSON.parse(this.authSvc.getToken())?.user;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authSvc.getToken()) {
      if (this.getUser?.role?.type == 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
      return false;
    }
    return true;
  }
}
