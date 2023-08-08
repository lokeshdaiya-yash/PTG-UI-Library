/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Service Auth Service;
 * @description This service for authentication api
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@ptg-ui/apps/ptg-angular-app/src/environments/environment';
import { User } from '../models/user.model';
import { TokenRes } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private TOKEN_KEY = 'token';
  private TOKEN_KEY = 'userdata';

  constructor(private http: HttpClient) {}

  // For token set
  setToken(token: string): void {
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  // For token get
  getToken(): any {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // For token remove
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // For login
  logIn(payload: User): Observable<TokenRes> {
    return this.http.post(environment.login, payload);
  }

  // For signup
  signUp(payload: User): Observable<TokenRes> {
    return this.http.post(environment.signup, payload);
  }

  // For user
  getUser() {
    return this.http.get(environment.users);
  }
}
