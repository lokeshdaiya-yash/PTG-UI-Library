import { Component } from '@angular/core';
import { resources } from "../../../resource/resource";
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-footer;
 * @description This component for footer
**/

@Component({
  selector: 'ptg-ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  resources=resources
}
