import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let http:HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: AuthService }, AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('remove token',()=>{
    localStorage.setItem('userdata','data');
    service.removeToken();
    expect(service.getToken()).toBe(null);
  })
  it('getUser check',()=>{
    let user =  jest.spyOn(service,'getUser');
    service.getUser()
    expect(user).toHaveBeenCalled();
  })
});
