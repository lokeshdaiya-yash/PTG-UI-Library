/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module AlertModule;
 * @description This module for alert
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
