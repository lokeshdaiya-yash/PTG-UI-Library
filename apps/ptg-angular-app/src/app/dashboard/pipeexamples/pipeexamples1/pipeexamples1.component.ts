/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { resources } from "../../../../resource/resource";
/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-pipeexamples;
 * @description This component for pipe example 1 (Using Pipes)
**/

@Component({
  selector: 'ptg-ui-pipeexamples1',
  templateUrl: './pipeexamples1.component.html',
  styleUrls: ['./pipeexamples1.component.scss']
})
export class Pipeexamples1Component {

  value1 = null;
  value2 = '';
  value3 = '';
  value4 = '';
  value5 = '0123456789';
  resources=resources;
  


}
