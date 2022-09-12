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

@NgModule({
  declarations: [
    PtgAgGridDatatableComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports:[
    PtgAgGridDatatableComponent
  ]
})
export class PtgAgGridDatatableModule { }
