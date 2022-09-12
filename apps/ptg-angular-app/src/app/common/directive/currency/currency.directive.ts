/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Directive ptgUiCurrency;
 * @description This directive used for convert number into currency format 
 **/

@Directive({
  selector: '[ptgUiCurrency]',
})
export class CurrencyDirective {
  constructor(private cp: CurrencyPipe, private control: NgControl) {}
  @HostListener('focusout', ['$event'])
  onFocusout(): void {
    const value  = this.control.value;
    this.control.control?.setValue(
      this.normalize(value)
    );
  }

  convertIntoCurrency(value: any) {
    const test = Number(value?.toString().replace(/[^0-9.-]+/g, ""));
    return this.cp.transform(test, 'USD', 'symbol', '1.2-2');
  }

  normalize(event: any) {
    const value = event;
    const result = value === null || value === 0 || value === '' ? '$0.00' : this.convertIntoCurrency(value);
    return result;
  }
}
