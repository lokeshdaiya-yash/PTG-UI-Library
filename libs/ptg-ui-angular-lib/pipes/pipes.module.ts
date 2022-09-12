import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { PhoneFormatPipe } from './phoneFormat/phone-format.pipe';
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module PtgPipesModule;
 * @description This module for all pipes
**/

@NgModule({
  declarations: [TruncatePipe, CapitalizePipe, PhoneFormatPipe],
  imports: [CommonModule],
  exports: [TruncatePipe, CapitalizePipe, PhoneFormatPipe],
})
export class PtgPipesModule {}
