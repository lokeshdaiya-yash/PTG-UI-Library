/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendarexample;
 * @description This component for calendarexample
**/

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { resources } from "../../../resource/resource";


@Component({
  selector: 'ptg-ui-calendarexample',
  templateUrl: './calendarexample.component.html',
  styleUrls: ['./calendarexample.component.scss'],
  host: {
    class: 'w-100',
  },
})
export class CalendarexampleComponent implements AfterViewInit {
  resources=resources;
  constructor(private cdr: ChangeDetectorRef){
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }
}
