/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @service PTGToastsService;
 * @description This service for toasts
**/

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PTGToastsService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message:any, title:any) {
    this.toastr.success(message, title);
  }
  showInfo(message:any, title:any) {
    this.toastr.info(message, title);
  }
  showWarning(message:any, title:any) {
    this.toastr.warning(message, title);
  }
  showError(message:any, title:any) {
    this.toastr.error(message, title);
  }

}
