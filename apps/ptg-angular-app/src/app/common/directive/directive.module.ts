import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CurrencyDirective } from './currency/currency.directive';
import { TestDirective } from './test/test.directive';
import { CapitalizeDirective } from './capitalize/capitalize.directive';
import { PhoneformatDirective } from './phoneFormat/phoneformat.directive';
import { HighlightCodeDirective } from './highlight/highlight.directive';



@NgModule({
  declarations: [
    CurrencyDirective,
    TestDirective,
    CapitalizeDirective,
    PhoneformatDirective,
    HighlightCodeDirective
  ],
  providers: [CurrencyPipe],
  imports: [CommonModule],
  exports: [CurrencyDirective, TestDirective, CapitalizeDirective, PhoneformatDirective, HighlightCodeDirective]
})
export class DirectiveModule { }
