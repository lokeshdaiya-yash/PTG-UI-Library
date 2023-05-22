/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module SelectModule;
 * @description This module for select
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    // PtgPipesModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
