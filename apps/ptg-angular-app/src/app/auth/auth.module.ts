/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module AuthModule;
 * @description This module for auth 
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal'
import { DemoPtgUiNgModule } from '@ptg-angular-app/common/demo-ptg-ui-ng/demo-ptg-ui-ng.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    DemoPtgUiNgModule
  ]
})
export class AuthModule { }
