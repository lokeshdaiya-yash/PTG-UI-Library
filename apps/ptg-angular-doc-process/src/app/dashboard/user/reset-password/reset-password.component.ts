/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { resources } from "../../../../resource/resource";
import { ResetPasswordModel } from '../models/password-model';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'ptg-ui-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  isSubmitted: boolean = false;
  resetPasswordForm: FormGroup;
  resources = resources;
  errorMessage: string | null;
  loggedUserId: string;
  loading: boolean = false;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
    let loggedUser: any = localStorage.getItem('userdata');
    this.loggedUserId = JSON.parse(loggedUser).id;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.resetPasswordForm.valid) {
      return;
    }
    if (this.resetPasswordForm.value.newPassword !== this.resetPasswordForm.value.confirmPassword) {
      this.errorMessage = `Password doesn't match`;
      return;
    }
    this.loading = true;
    const dataTosend: ResetPasswordModel = {
      userId: this.loggedUserId,
      oldPassword: this.resetPasswordForm.value.currentPassword,
      newPassword: this.resetPasswordForm.value.newPassword
    }

    this.userService.resetPassword(dataTosend).subscribe({
      next: (res) => {
        console.log(res);
        this.loading = false;
        this.errorMessage = null;
        this.auth.setIsPasswordChangedFlag(true);
        this.resetPasswordForm.reset();
        this.router.navigate(['/dashboard/upload-document']);
      },
      error: (err)=>{
        this.errorMessage = err.error.message || 'Someting went wrong';
        this.loading = false;
      },
      complete: ()=>{}
    })

  }

  // Method for close alert
  closeAlert(event: any): void {
    this.errorMessage = event;
  }

}
