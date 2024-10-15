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
    try {

      const userData = localStorage.getItem('userdata');
      
      if (!userData) {
        console.warn('No user data found in localStorage, removing element.');
        this._el.nativeElement.remove();
        return;
      }
      
      const parsedData = JSON.parse(userData);
 
      
      const userRole = parsedData?.user?.role?.name?.toUpperCase();
      
      if (!userRole) {
        console.warn('User role not found in userdata, removing element.');
        this._el.nativeElement.remove();
        return;
      }
 
      // Check if user is admin
      const isAdmin = 'ADMIN' === userRole;
 
      // Remove element if the user is not an admin
      if (!isAdmin) {
        this._el.nativeElement.remove();
      }
    } catch (error) {
      // If there's an error in parsing or any other issue, remove the element
      console.error('Error parsing user data:', error);
      this._el.nativeElement.remove();
    }
  }


  // _restrictNavigation() {
  //   // getting role data from localStorage 
  //   const userRole = JSON.parse(localStorage.getItem('userdata') || '')?.user?.role?.name?.toUpperCase();
  //   const isAdmin = 'ADMIN' === userRole;
  //   if (!isAdmin) {
  //     this._el.nativeElement.remove();
  //   }
  // }
}
