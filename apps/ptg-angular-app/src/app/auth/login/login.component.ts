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
import { User } from '@ptg-angular-app/auth/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { resources } from "../../../resource/resource";

@Component({
  selector: 'ptg-ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  submitted = false;
  user: User = new User();
  errorMessage!: string | null;
  loading = false;
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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], //
      password: ['', [Validators.required]],
    });
  }

  // This method for login submit
  onLoginSubmit(): void {
    this.submitted = true;
    const payload = {
      identifier: this.loginForm.value.email,
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
        next: (res) => {
          // For response success
          console.log('11133',res);
          this.auth.setToken(JSON.stringify(res));
          this.loading = false;
          this.errorMessage = null;
          this.loginForm.reset();
          this.response = res;
          
          
          if (this.response.user?.role?.type == 'admin') {
            // console.log('11134', 'value');
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.errorMessage = 'Invalid email or password';
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

  socialLogin(){
    console.log('working');
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(0);
    this.unsubscribe.complete();
  }

}
