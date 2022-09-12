/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ToastsModule;
 * @description This module for toasts
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './toasts/toasts.component';
import { ToastrModule } from 'ngx-toastr';
import { PTGToastsService } from './services/toasts.service';

@NgModule({
  declarations: [
    ToastsComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
  ], exports:[
    ToastsComponent
  ],
  providers: [
    PTGToastsService
  ]
})
export class ToastsModule { }
