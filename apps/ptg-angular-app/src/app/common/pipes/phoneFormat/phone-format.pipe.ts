/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Pipe phoneFormat;
 * @description This pipe used for convert number into phone format 
 **/

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(rawNum: any) {
    rawNum = "+1"+ rawNum;
    const countryCodeStr = rawNum.slice(0,2);
    const areaCodeStr = rawNum.slice(2,5);
    const midSectionStr = rawNum.slice(5,8);
    const lastSectionStr = rawNum.slice(8);

    return `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
  }
}
