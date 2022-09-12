/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-pipeexamples2;
 * @description This component for pipe example 2 (Using Directive)
**/

import { Component } from '@angular/core';
import { resources } from "../../../../resource/resource";
@Component({
  selector: 'ptg-ui-pipeexamples2',
  templateUrl: './pipeexamples2.component.html',
  styleUrls: ['./pipeexamples2.component.scss']
})
export class Pipeexamples2Component {

  value1 = null;
  value2 = '';
  value3 = '';
  value4 = '';
  value5 = '0123456789';
  resources=resources
}
