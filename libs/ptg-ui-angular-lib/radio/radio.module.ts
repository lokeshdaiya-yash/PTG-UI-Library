/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module RadioModule;
 * @description This module for radio
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RadioComponent
  ]
})
export class RadioModule { }
