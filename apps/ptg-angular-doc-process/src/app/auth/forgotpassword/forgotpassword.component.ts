/* eslint-disable @nrwl/nx/enforce-module-boundaries */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-forgotpassword;
 * @description This component for forgot password
**/

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {  PTGToastsService } from 'libs/ptg-ui-angular-lib/toasts/services/toasts.service';
import { resources } from "../../../resource/resource";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ptg-ui-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  @Input() modalRef: BsModalRef | any;
  forgotForm!: FormGroup;
  loading:boolean = false;
  errorMessage = null;
  resources = resources;
  isHideDiv:boolean = false;
  isShowResendButton:boolean = false;
  timeLeft: number = 0;
  interval: any= null;
  route: string;

  get f() {
    return this.forgotForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: PTGToastsService,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  /* Method for Forgot Password button*/
  onForgotSubmit() {
    this.loading = true;
    this.isShowResendButton = false;
    const payload = {
      email: this.forgotForm.value.email,
    };

    this.auth.forgetPassword(payload)
      .subscribe({
        next: (res) => {
          // For response success
          this.loading = false;
          this.isHideDiv = true;    
          this.startTimer();

          setTimeout(() => {
            this.showResendButton();
            clearInterval(this.interval);
                 }, 60000) //30secs
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Something went wrong';
          this.loading = false;
        },
        complete: () => { }
      });
  }

  /* Method for ok selection after entering the email */
  isClosemodal() {
    this.modalRef?.hide();
    this.isHideDiv = true;
  }

  /* Method for resend password button*/
  resendPassword() {
    this.isHideDiv = false;
    clearInterval(this.interval);
     // this.timeLeft=60;
  }

  /* Method to enable resend button */
  showResendButton() {
    this.isShowResendButton = true;
  }

  /* Method for timer */
  startTimer() {
    this.timeLeft=60;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
    }, 1000) //1sec
  }

  /* Method for Close Alert*/
  // closeAlert(event: any) {}
}
