/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-button;
 * @description This component for button
**/

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ptg-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[tabindex]': 'disabled ? -1 : 0',
    '(keydown)': 'handleKeyDown($event)',
  },
})
export class ButtonComponent implements OnInit {
  @Input() type:any = 'button';
  @Input() btnStyleType:any;
  @Input() isDisable = false;
  @Input() isBlock = false;
  @Input() accessKey = '';
  @ViewChild("button", { static: true }) button!: ElementRef;


  ngOnInit(): void {
    // this.button.nativeElement.accessKey = this.accessKey;
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.which) {
      case 13:
        this.button.nativeElement.click();
        break;
      default:
        return;
    }
  }
}
