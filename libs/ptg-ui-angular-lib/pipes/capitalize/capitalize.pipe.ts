/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Pipe capitalize;
 * @description This pipe used for Capitalize string
 **/

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    const capitalizeFirstLetter =  value.charAt(0).toUpperCase() + value.slice(1);
    return capitalizeFirstLetter;
  }

}
