/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-login;
 * @description This component for login
**/

import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject, takeUntil } from 'rxjs';
import { resources } from "../../../resource/resource";
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ptg-ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  submitted:boolean = false;
  user: User = new User();
  errorMessage!: string | null;
  loading:boolean = false;
  unsubscribe: Subject<any> = new Subject();
  modalRef?: BsModalRef;
  resources = resources;
  response:any;


  get f() {
    return this.loginForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    const userToken = this.auth.getToken();
    if(userToken && userToken != ''){
      this.router.navigate(['/dashboard/features']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], //
      password: ['', [Validators.required]],
    });
  }

  // This method for login submit
  onLoginSubmit(): void {
    this.submitted = true;
    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.userLogin(payload);
  }

  // This method for login api call
  userLogin(payload: any) {
    this.loading = true;
    this.auth.logIn(payload)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (res:any) => {
          // For response success
          console.log('11133',res);
          this.auth.setToken(JSON.stringify(res));
          this.errorMessage = null;
          this.loginForm.reset();
          this.response = res;
          this.auth.setIsPasswordChangedFlag(res.isPasswordChange);
          this.loading = false;
          if(!res.isPasswordChange){
            this.router.navigate(['/dashboard/user/reset-password']);
          }else{
          this.router.navigate(['/dashboard/features']);
          }
        },
        error: (err) => {
          console.log('error', err);
          this.errorMessage = err.error.message || 'Something went wrong';
          this.loading = false;
        },
        complete: () => { }
      });
  }

  // Method for close alert
  closeAlert(event: any): void {
    this.errorMessage = event;
  }

  // Method for show modal
  showModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService?.show(template);
  }

  // Method for close modal
  isClosemodal() {
    this.modalRef?.hide();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(0);
    this.unsubscribe.complete();
  }

  goDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
