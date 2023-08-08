import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class PasswordupdatedGuard  {
  isPasswordChanged: boolean;
  constructor(private auth: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.auth.getIsPasswordChanged().subscribe({
        next: (res)=>{
          this.isPasswordChanged = res;
       }
      });
      if(!this.isPasswordChanged){
        this.router.navigate(['/dashboard/user/reset-password']);
        return false;
      }
    return true;
  }
  
}
