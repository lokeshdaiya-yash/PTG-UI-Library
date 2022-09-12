/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @since March 2022
 * @author Yogita Wasnik
 * @Directive Role based directive;
 * @description This Directive use for admin and supervisor role
 * @UpdatedBy Aakash Patidar
 **/

import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[ptgUiShowForRoles]',
})
export class ShowForRolesDirective implements AfterViewInit {
  @Input('ptgUiShowForRoles') roles = '';
  
  // We can read from current user info
  _showForRole: string[] = ['admin', 'supervisor'];
  
  constructor(private _el: ElementRef) {}

  ngAfterViewInit(): void {
    this._restrictNavigation();
  }

  // _restrictNavigation() used for checking the user role is exist or not
  _restrictNavigation() {
    const roles = this.roles.split(',');
    let isExists: any = '';
    for (const element of this._showForRole) {
      isExists = roles.find((item) => item.trim().toLowerCase() === element.trim());
      if (isExists) break;
    }

    // if role is not exists remove element 
    if (!isExists) {
      this._el.nativeElement.remove();
    }
  }
}
