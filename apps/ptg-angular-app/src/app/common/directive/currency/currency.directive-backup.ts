/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
@Directive({
  selector: '[ptgUiCurrency]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // useExisting: forwardRef(() => CurrencyDirective),
      useExisting: CurrencyDirective,
      multi: true,
    },
  ],
})
export class CurrencyDirective implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};
  
  @HostListener('blur', ['$event'])
  onBlur(event:any): void {
    this.writeValue(event.target.value);
    this.onTouched();
  }

  @HostListener('input', ['$event'])
    onInput(event:any): void {
    const value = this.normalize(event.target.value);
    this.onChange(value);
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event:any): void {
    const numberPattern = /^\d*\.?\d{0,2}$/g; // xxx.xx
    const current: string = event.target.value;
    const position = event.target.selectionStart;
    const next: string = [
      current.slice(0, position),
      event.key === 'Decimal' ? '.' : event.key,
      current.slice(position),
    ].join('');
    if (next && !String(next).match(numberPattern)) {
      this.onChange(next);
      // event.preventDefault();
    }
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cp: CurrencyPipe,) {}

  writeValue(value:any): void {
    value = Number(value?.toString().replace(/[^0-9.-]+/g,""));
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'value',
      this.normalize(value)
    );
    // this.onChange(this.normalize(value));
  }

  registerOnChange(fn:any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn:any): void {
    this.onTouched = fn;
  }

  convertToCurrency(value:any): any {
    const test = Number((String(value).substring(0)).replace(/,/g, ''))
    // return value;
    // return this.cp.transform(value, 'USD', 'symbol', '1.2-2');
    return this.cp.transform(test, 'USD', 'symbol', '1.2-2');
  }

  normalize(value: string): number | string {
    return value === null || value === '' ? 0 : this.convertToCurrency(value);
  }
}
