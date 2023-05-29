import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customvalidation',
})
export class CustomvalidationPipe implements PipeTransform {
  transform(value: number, totalPages: any): any {
    let correctedinput = value;
    if (value < 0 || value === 0) {
      correctedinput = 1;
    }
    if (value > totalPages) {
      correctedinput = totalPages;
    }
    return correctedinput;
  }
}
