/**
 * @since March 2022
 * @author Yogita Wasnik
 * @Component Role Based Directive;
 * @description This component for role based directive
 * @UpdatedBy Aakash Patidar
**/

/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import {resources  } from "../../../resource/resource";
@Component({
  selector: 'ptg-ui-role-based-directive',
  templateUrl: './role-based-directive.component.html',
  styleUrls: ['./role-based-directive.component.scss'],
})
export class RoleBasedDirectiveComponent {
  resources=resources
}