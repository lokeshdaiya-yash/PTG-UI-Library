/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import { Directive, HostBinding, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Directive ptgUiCapitalize;
 * @description This directive used for Capitalize string
 **/

@Directive({
  selector: '[ptgUiCapitalize]',
})
export class CapitalizeDirective {
  constructor(private control: NgControl) {}

  @HostListener('focusout', ['$event'])
  onFocusout(): void {
    this.control.control?.setValue(
      this.control.value.charAt(0).toUpperCase() + this.control.value.slice(1)
    );
  }


  @HostBinding('class')
  ClassName = this.control;
}
