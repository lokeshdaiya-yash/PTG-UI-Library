/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module InputModule;
 * @description This module for input
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
