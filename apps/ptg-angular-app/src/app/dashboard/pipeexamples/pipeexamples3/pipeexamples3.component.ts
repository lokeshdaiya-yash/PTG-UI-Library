/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-pipeexamples3;
 * @description This component for pipe example 3 (Using Event)
**/

import { CurrencyPipe } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { resources } from "../../../../resource/resource";
@Component({
  selector: 'ptg-ui-pipeexamples3',
  templateUrl: './pipeexamples3.component.html',
  styleUrls: ['./pipeexamples3.component.scss']
})
export class Pipeexamples3Component {

  value1 = null;
  value2 = '';
  value3 = '';
  value4 = '';
  value5 = '0123456789';
  resources=resources

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cp: CurrencyPipe) { }

  /****************** convert Into Currency**********************/
  convertIntoCurrency(value: any) {
    const test = Number(value?.toString().replace(/[^0-9.-]+/g, ""));
    return this.cp.transform(test, 'USD', 'symbol', '1.2-2');
  }

  normalize(event: any) {
    const value = event.target.value;
    const result = value === null || value === 0 || value === '' ? '$0.00' : this.convertIntoCurrency(value);
    event.srcElement.value = result;
  }
  /***********************************************************/


  /****************** convert Into Capitalize**********************/

  convertIntoCapitalize(event: any) {
    const value = event.target.value;
    const result = value.charAt(0).toUpperCase() + value.slice(1)
    event.srcElement.value = result;
  }

  /***********************************************************/

  /****************** convert Into PhoneNumber**********************/

  convertIntoPhoneNumber(event: any) {
    let rawNum = event.target.value;
    if (rawNum.slice(0, 1) === '+'){
      rawNum = rawNum.replace(/\D/g, "").slice(1);
    }
    else
      rawNum = rawNum.replace(/\D/g, "");
    rawNum = "+1" + rawNum;
    const countryCodeStr = rawNum.slice(0, 2);
    const areaCodeStr = rawNum.slice(2, 5);
    const midSectionStr = rawNum.slice(5, 8);
    const lastSectionStr = rawNum.slice(8);
    const result = `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
    event.srcElement.value = result;
  }

  /***********************************************************/
}
