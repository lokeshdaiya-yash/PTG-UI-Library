/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Service Auth Service;
 * @description This service for authentication api
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { TokenRes } from '../models/token.model';
// import { ENDPOINTS } from 'apps/doc-process-ang/src/config';
import {ENDPOINTS} from '../../../config'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private TOKEN_KEY = 'token';
  endPoints = ENDPOINTS;
  checkPasswodUpdated = new BehaviorSubject<boolean>(true);
  private TOKEN_KEY = 'userdata';
  
  constructor(private http: HttpClient) { }

  // For token set
  setToken(token:string): void {
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  // For token get
  getToken(): any {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setIsPasswordChangedFlag(isPwdChanged: boolean){
    this.checkPasswodUpdated.next(isPwdChanged);
  }
  getIsPasswordChanged(){
    return this.checkPasswodUpdated.asObservable();
  }
  
  // For token remove
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // For login
  logIn(payload: User): Observable<TokenRes> {
    return this.http.post(this.endPoints.login, payload);
  }

  // For signup
  signUp(payload: User): Observable<TokenRes> {
    return this.http.post(this.endPoints.signup, payload);
  }

  // For user
  getUser(){
    return this.http.get(`${this.endPoints.user}/userData`);
  }

  //for forgot password
  forgetPassword(payload: User): Observable<TokenRes> {
    return this.http.post(this.endPoints.forgetPassword, payload);
  }
}
