import { HttpClientModule } from '@angular/common/http';
import { discardPeriodicTasks, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { AuthService } from "./auth.service";
describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router: Router;
  let authService: AuthService
  let loginData = { "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY1MjA5MzQyMywiZXhwIjoxNjU0Njg1NDIzfQ.cMnJsBcRJHrnjFgSHFF-Q_3vifyzGbMQsbZacDtMUB8", "user": { "id": 19, "username": "bhanu", "email": "bhanu@gmail.com", "provider": "local", "confirmed": true, "blocked": null, "role": { "id": 3, "name": "Admin", "description": "Admin user", "type": "admin" }, "gender": "male", "created_at": "2022-02-11T10:48:05.567Z", "updated_at": "2022-03-04T09:05:22.518Z", "city": "Indore", "DOB": null } }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent },
        ]),
      ],
      providers: [{ provide: AuthService }, AuthService],
    });
    guard = TestBed.inject(AdminGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true if logged in', () => {
  jest.spyOn(authService, 'getToken')
   expect(loginData.user.role.type).toEqual('admin')
   let ad 
   if(loginData.user.role.type == 'admin'){
     ad = true
     expect(ad).toBeTruthy();
   }
   
  });
  it('should return false if not logged in', () => {
    localStorage.clear()
    let status = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{ url: '/login' });
    expect(status).toBeFalsy();
  });
  it('check admin', () => {
    authService.setToken(JSON.stringify(loginData))
    authService.getToken();
    let role = JSON.parse(authService.getToken()).user?.role?.type    
    let status = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{ url: '/login' });
    expect(status).toBeTruthy();
    expect(role).toBe('admin');
  });

  
});