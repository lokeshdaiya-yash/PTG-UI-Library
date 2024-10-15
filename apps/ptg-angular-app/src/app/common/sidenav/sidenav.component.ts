/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-sidenav;
 * @description This component for side navigation/menu
**/

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../models/menuItem.model';

@Component({
  selector: 'ptg-ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    class: 'position-relative d-block h-100',
  },
})
export class SidenavComponent {
  
  hidden = true;
  
  @Input() selectedPath = '';
  @Input() menuItems?: MenuItem[];
  @Input() isMenuOpen = false;
  @Output() selectMenu = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) { }
  toggle(): void {
    this.hidden = !this.hidden;
  }

  open(): void {
    this.hidden = false;
  }

  close(): void {
    this.hidden = true;
  }

  // Method for navigation on click on menu
  navigate(menuItem: any): void {
   if (menuItem && menuItem.disabled === false) {
    this.selectedPath = menuItem.path;
    this.selectMenu.emit(menuItem);
    this.router.navigate([this.selectedPath], { relativeTo: this.route });
   }
  }

}
