/* eslint-disable @nx/enforce-module-boundaries */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-forgotpassword;
 * @description This component for forgot password
 **/

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PTGToastsService } from '@ptg-ui/angular/toasts';
import { resources } from '../../../resource/resource';

@Component({
  selector: 'ptg-ui-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  @Input() modalRef: BsModalRef | any;
  forgotForm!: FormGroup;
  loading = false;
  errorMessage = null;
  resources = resources;

  get f() {
    return this.forgotForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: PTGToastsService
  ) {}

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /* Method for Forgot Password button*/
  onForgotSubmit() {
    this.toastr.showSuccess('', '');
    this.modalRef?.hide();
    this.forgotForm.reset();
  }

  /* Method for Close Alert*/
  // closeAlert(event: any) {}
}
