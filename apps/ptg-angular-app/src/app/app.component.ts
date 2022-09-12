/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-root;
 * @description This component for main routing container - (router-outlet)
 **/

import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ptg-angular-app';
}
