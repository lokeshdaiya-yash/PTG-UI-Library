/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-reset;
 * @description This component for reset password
**/

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PTGToastsService } from '@ptg-ui/angular/toasts';
import { ConfirmPasswordValidator } from '../utils/validators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { resources } from "../../../resource/resource";

@Component({
  selector: 'ptg-ui-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})

export class ResetComponent implements OnInit {
  @Input() modalRef?: BsModalRef;
  resetForm!: FormGroup;
  loading = false;
  errorMessage = null;
  resources=resources

  get f() {
    return this.resetForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: PTGToastsService
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: ConfirmPasswordValidator("newPassword", "confirmPassword")
    });
  }

   // This method for Reset form submit
  onResetSubmit(){
    this.toastr.showSuccess('', '');
    this.modalRef?.hide();
    this.resetForm.reset();
  }

  closeAlert(event:any){
  }
}
