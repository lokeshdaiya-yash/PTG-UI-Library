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
  pipeHtmlCode = `
 
  <p>{{ 'angular pipes' | capitalize }}</p>
  <p> {{ 123 | currency}}</p>
  <p>{{ 1234567869 | phoneFormat}}</p>
  <label aria-label="output" for="numberText"><strong> Capital Pipe:- </strong> {{ pipeTestValue | capitalize}}</label> 
  <label aria-label="output" for="numberText"><strong> Phone Pipe:- </strong> {{pipeTestValue1 | phoneFormat}}</label>
  <label aria-label="output" for="numberText"><strong> Currency Pipe:- </strong> {{pipeTestValue3 | currency}}</label>
  `;
  pipeTsCode = `
  import { Component } from '@angular/core';
 
  @Component({
  selector: 'ptg-ui-pipeexamples1',
  templateUrl: './pipeexamples1.component.html',
  styleUrls: ['./pipeexamples1.component.scss']
  })
  export class Pipeexamples1Component {

  pipeTestValue : string = "hello world";
  pipeTestValue1 : number = 2394789083;
  pipeTestValue3 : number = 99;
  `
}
