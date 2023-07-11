/**
 * @since March 2022
 * @author Aakash Patidar
 * @Module Ag grid datatable;
 * @description This module used for reusable ag-grid datatable
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtgAgGridDatatableComponent } from './ptg-ag-grid-datatable/ptg-ag-grid-datatable.component';
import { AgGridModule } from 'ag-grid-angular';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PtgAgGridDatatableComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
  ],
  exports:[
    PtgAgGridDatatableComponent
  ]
})
export class PtgAgGridDatatableModule { }
