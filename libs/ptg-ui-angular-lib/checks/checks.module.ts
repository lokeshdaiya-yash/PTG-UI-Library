/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ChecksModule;
 * @description This module for checks
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksComponent } from './checks/checks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChecksComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    ChecksComponent
  ]
})
export class ChecksModule { }
