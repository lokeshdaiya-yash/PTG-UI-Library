/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @since May 2022
 * @author Akshay Patidar
 * @Guard Admin Guard;
 * @description This is used for admin guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  getUser:any
  constructor(private AuthService:AuthService, private router:Router){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //used to check role is admin or not
      this.getUser =JSON.parse(this.AuthService.getToken())?.user;
      if (this.getUser?.role?.type == 'admin') {
      return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
