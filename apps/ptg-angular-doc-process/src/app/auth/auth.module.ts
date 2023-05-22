/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * @since June 2022
 * @author Gaurav Singh
 * @Module AuthModule;
 * @description This module for auth 
**/

import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { PtgUiAngularLibModule } from 'libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AuthRoutingModule } from './auth-routing.module';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { PtgUiAngularLibModule } from 'libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module';
// import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    FormsModule,
    PtgUiAngularLibModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AuthModule { }
