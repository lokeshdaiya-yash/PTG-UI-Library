/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Directive ptgUiPhoneformat;
 * @description This directive used for convert number into phone format 
 **/

@Directive({
  selector: '[ptgUiPhoneformat]'
})
export class PhoneformatDirective {

  constructor(private control: NgControl) {}

  @HostListener('focusout', ['$event'])
  onFocusout(): void {
    let rawNum = this.control.value;
    if (rawNum.slice(0, 1) === '+')
      rawNum = rawNum.replace(/\D/g, "").slice(1);
    else
      rawNum = rawNum.replace(/\D/g, "");
    rawNum = "+1"+ rawNum;
    const countryCodeStr = rawNum.slice(0,2);
    const areaCodeStr = rawNum.slice(2,5);
    const midSectionStr = rawNum.slice(5,8);
    const lastSectionStr = rawNum.slice(8);

    this.control.control?.setValue(
      `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`
    );
  }

}
