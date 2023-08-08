/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendarexample4;
 * @description This component for calendarexample4
 **/

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { calendarValidator } from '@ptg-angular-app/common/utils/validators';
import { resources } from '../../../../resource/resource';

@Component({
  selector: 'ptg-ui-calendarexample4',
  templateUrl: './calendarexample4.component.html',
  styleUrls: ['./calendarexample4.component.scss'],
})
export class Calendarexample4Component implements OnInit {
  calendarForm!: FormGroup;
  startDate!: any;
  endDate!: any;
  endMinDate!: any;
  isDisabled = true;
  minDate = new Date();
  resources = resources;

  get f() {
    return this.calendarForm.controls;
  }

  get endDateDetail() {
    return this.calendarForm.get('endDate');
  }

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.calendarForm = this.formBuilder.group(
      {
        startDate: [null, [Validators.required]], //
        endDate: [null, [Validators.required]],
        calendar2Value: [null, Validators.required],
      },
      {
        validator: calendarValidator('startDate', null, 'calendar2Value'),
      }
    );
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  onStartDateChange(event: any) {
    if (event) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
    // this.startDate = event;
    // this.endMinDate = event;
  }

  // onEndDateChange(event:any){
  //   // this.endDate = event;
  //   // console.log('this.calendarForm', this.calendarForm);
  // }

  onDateChange(event: any) {
    // console.log('this.calendarForm', this.calendarForm);
  }

  onFormSubmit(event: any) {
    // console.log('this.calendarForm', this.calendarForm);
  }
}
