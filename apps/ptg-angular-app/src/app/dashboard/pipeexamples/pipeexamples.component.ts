/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, } from '@angular/core';

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-pipeexamples;
 * @description This component for pipe example
**/

@Component({
  selector: 'ptg-ui-pipeexamples',
  templateUrl: './pipeexamples.component.html',
  styleUrls: ['./pipeexamples.component.scss']
})
export class PipeexamplesComponent {
  ngAfterViewInit(){
    let x:any = document.getElementById("2-link")
    x.removeAttribute("href");
    let y:any = document.getElementById("3-link")
    y.removeAttribute("href");
  }
}