/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-alert;
 * @description This component for alert
**/

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ptg-ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
  @Input() type?: string;
  @Input() message?: string;
  @Input() isDismissible?: boolean;
  @Output() closeAlert = new EventEmitter<any>();

  onClosed(): void {
    this.closeAlert.emit(null);
  }

}
