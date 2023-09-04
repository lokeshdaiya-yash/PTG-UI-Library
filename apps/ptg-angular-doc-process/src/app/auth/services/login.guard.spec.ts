import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginGuard } from './login.guard';
describe('LoginGuard', () => {
  let guard: LoginGuard;
  let router: Router;
  let authService: AuthService
  let loginData = { "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY1MjA5MzQyMywiZXhwIjoxNjU0Njg1NDIzfQ.cMnJsBcRJHrnjFgSHFF-Q_3vifyzGbMQsbZacDtMUB8", "user": { "id": 19, "username": "bhanu", "email": "bhanu@gmail.com", "provider": "local", "confirmed": true, "blocked": null, "role": { "id": 3, "name": "Admin", "description": "Admin user", "type": "admin" }, "gender": "male", "created_at": "2022-02-11T10:48:05.567Z", "updated_at": "2022-03-04T09:05:22.518Z", "city": "Indore", "DOB": null } }
  let notAdmin = { "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY1MjA5MzQyMywiZXhwIjoxNjU0Njg1NDIzfQ.cMnJsBcRJHrnjFgSHFF-Q_3vifyzGbMQsbZacDtMUB8", "user": { "id": 19, "username": "bhanu", "email": "bhanu@gmail.com", "provider": "local", "confirmed": true, "blocked": null, "role": { "id": 3, "name": "test", "description": "test user", "type": "test" }, "gender": "male", "created_at": "2022-02-11T10:48:05.567Z", "updated_at": "2022-03-04T09:05:22.518Z", "city": "Indore", "DOB": null } }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'login', component: LoginComponent },
      ]),],
      providers: [{ provide: AuthService }, AuthService],
    });
    guard = TestBed.inject(LoginGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true))
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('bydefault true', () => {
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBe(true);

  });
  it('should return true if logged in', () => {
    authService.setToken(JSON.stringify(loginData))
    let role = JSON.parse(authService.getToken()).user?.role?.type
    expect(role).toBe('admin');
    let status = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{ url: '/' });
    expect(router.navigate).toHaveBeenCalledWith(['/']);
    expect(authService.getToken()).toBeDefined()
    // expect(status).toBeTruthy();
  });
  it('should return false if not logged in', () => {
    let status = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{ url: '/login' });
    expect(status).toBeFalsy();
  });
  it('should else condiitron', () => {
    authService.setToken(JSON.stringify(notAdmin))
    let role = JSON.parse(authService.getToken()).user?.role?.type
    expect(role).not.toBe('admin')
    expect(role).toBe('test')
  });
});
