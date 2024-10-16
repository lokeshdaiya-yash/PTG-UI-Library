/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module CalendarModule;
 * @description This module for calendar
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ], 
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
