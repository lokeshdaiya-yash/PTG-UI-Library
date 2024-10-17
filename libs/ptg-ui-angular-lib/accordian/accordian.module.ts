/**
 * @since May 2022
 * @author Aakash Patidar
 * @Module ptg-ui-accordian;
 * @description This module for accordian;
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    AccordianComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),    
  ],
  exports:[
    AccordianComponent
  ]
})
export class AccordianModule { }
