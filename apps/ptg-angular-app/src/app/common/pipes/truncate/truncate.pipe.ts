import { Pipe, PipeTransform } from '@angular/core';

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Pipe truncate;
 * @description This pipe used for truncate string
 **/

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string | null): string {
    const limit = args ? parseInt(args, 10) : 10;
    const trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
