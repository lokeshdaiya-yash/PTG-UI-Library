/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-draganddrop;
 * @description This component for drag and drop
 **/

import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.scss'],
  host: {
    class: 'w-100',
  },
})
export class DraganddropComponent {
  isLoaded=true;
}
