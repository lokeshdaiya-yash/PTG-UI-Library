/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendarexample1;
 * @description This component for calendarexample1
**/

import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { calendarValidator } from '@ptg-angular-app/common/utils/validators';
import { resources } from "../../../../resource/resource";
import { MatSnackBar } from '@angular/material/snack-bar';

import { ACCORDIAN_DATA } from '@ptg-angular-app/mock/mocks';
@Component({
  selector: 'ptg-ui-calendarexample1',
  templateUrl: './calendarexample1.component.html',
  styleUrls: ['./calendarexample1.component.scss']
})
export class Calendarexample1Component implements OnInit, AfterViewInit {
  calendarForm!: FormGroup;
  startDate!: Date;
  endDate!: Date;
  endMinDate = new Date();
  resources=resources
  submitted = false
  data = ACCORDIAN_DATA;
  htmlCode = `
    <ptg-ui-calendar [minDate]="minDate" [maxDate]="endDate" placeholder='MM-DD-YYYY' className='' id=''
                     [disabled]='false' [readOnly]="false" (calendarValueChange)="onDateChange($event)">
    </ptg-ui-calendar>`;

  tsCode =
    `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-calendar-component',
      templateUrl: './demo-calendar.component.html'
    })
    export class DemoCalendarComponent {
      minDate = new Date();
      maxDate = new Date();

      constructor() {
        this.maxDate.setDate(this.minDate.getDate() + 30);
      }
    }`

  get f() {
    return this.calendarForm.controls;
  }

  get endDateDetail() {
    return this.calendarForm.get('endDate');
  }

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.calendarForm = this.formBuilder.group({
      startDate: [null, [Validators.required]], //
      endDate: [null, [Validators.required]],
      calendar1Value: [null, [Validators.required]],
      calendar2Value: [null, Validators.required]
    },{
      validator: calendarValidator("startDate","endDate", "calendar2Value")
    },
    );
    this.cdr.detectChanges()

  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  openSnackBar() {
    this._snackbar.open('Code Copied', '', {
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    })
  }

  onStartDateChange(event:any){
    this.startDate = event;
    this.endMinDate = event;

    if(this.endDateDetail?.value < event){
      this.endDateDetail?.reset();
    }
    const calendar1Control = this.f['calendar1Value'];
    if(calendar1Control?.value < event){
      calendar1Control?.reset();
    }
  }

  onEndDateChange(event:any){
    this.endDate = event;
    const calendar1Control = this.f['calendar1Value'];

    if(calendar1Control?.value > event){
      calendar1Control?.reset();
    }
    // console.log('this.calendarForm', this.calendarForm);
  }

  // onDateChange(event:any){
  //   // console.log('this.calendarForm', this.calendarForm);
  // }

  onFormSubmit(event:any){
    this.submitted = true
    // console.log('this.calendarForm', this.calendarForm);
  }

}
