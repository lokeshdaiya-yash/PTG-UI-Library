/**
 * @since March 2022
 * @author Yogita Wasnik
 * @Directive Role based directive;
 * @description This Directive for login user with admin role
 * @UpdatedBy Aakash Patidar
 **/

import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[ptgUiShowForLoginUsers]',
})
export class ShowForLoginUsersDirective implements AfterViewInit {
  @Input('ptgUiShowForLoginUsers') roles = '';

  constructor(private _el: ElementRef) {}

  /** We can read from current user info**/
  ngAfterViewInit(): void {
    this._restrictNavigation();
  }

  /** @function _restrictNavigation() used for checking the user role is exist or not**/
  _restrictNavigation() {
    // getting role data from localStorage 
    const userRole = JSON.parse(localStorage.getItem('userdata') || '')?.user?.role?.name?.toUpperCase();
    const isAdmin = 'ADMIN' === userRole;
    if (!isAdmin) {
      this._el.nativeElement.remove();
    }
  }
}
