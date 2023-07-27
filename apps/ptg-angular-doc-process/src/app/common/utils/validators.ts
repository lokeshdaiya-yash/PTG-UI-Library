/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @validator ;
 * @description This file for custom Validation
**/

import { FormGroup } from "@angular/forms";


// custom validator for Confirm Password
export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmPasswordValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // custom validator for Calendar
export function calendarValidator(startDate: any, endDate: any, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      let control1 = null;
    if(startDate) {
      control1 = formGroup.controls[startDate];
    }
    let control2 = null;
    if(endDate) {
      control2 = formGroup.controls[endDate];
    }
    const matchingControl = formGroup.controls[matchingControlName]

    if ( !control1?.value && !control1?.value
    ) {
      return;
    }
    if(!matchingControl.value || control1?.value > matchingControl.value || control2?.value < matchingControl.value){
   
      matchingControl.setErrors({ calendarValidator: true }); 
    } else {
   
      matchingControl.setErrors(null);

    }
  };
}

