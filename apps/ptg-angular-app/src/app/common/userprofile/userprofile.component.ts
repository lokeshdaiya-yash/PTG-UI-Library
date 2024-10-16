/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-userprofile;
 * @description This component for userprofile
**/


import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../auth/services/auth.service'
import { resources } from "../../../resource/resource";
@Component({
  selector: 'ptg-ui-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: BsModalService) { }

  modalRef?: BsModalRef;
  showProfileIcon = false;
  user:any = {};
  shortName:any = '';
  resources=resources
  userName: any = '';

  ngOnInit(): void {
    this.user = JSON.parse(this.authService.getToken())?.user;
    this.userName = this.user?.username;
    const matches = this.user?.username.match(/\b(\w)/g);
    this.shortName = matches?.join('');
  }

  // Method for Show/Hide User Profile
  toggleUserProfileDiv(){
    this.showProfileIcon = !this.showProfileIcon
  }

   // Method for show reset password modal
  passwordReset(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

   // Method for close modal
  isClosemodal(){
    this.modalRef?.hide();
  }

   // Method for logout 
  logout(){
    this.authService.removeToken();
    sessionStorage.clear();
    window.location.reload();
  }
}
