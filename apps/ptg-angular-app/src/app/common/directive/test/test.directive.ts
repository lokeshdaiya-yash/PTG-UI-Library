/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[ptgUiTest]'
})
export class TestDirective {
  
  @HostListener('blur', ['$event']) onBlur(event:any) {
    // this.el.nativeElement.value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  }

  @HostListener('input', ['$event']) onInput(event:any) {
    //console.log('this.el', this.renderer.(this.el.nativeElement));
    this.el.nativeElement.value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  }

  @HostListener('keypress', ['$event']) onKeypress(event:any) {
    // console.log('onKeypress', event);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setProperty(this.el.nativeElement, 'card-title1', '')
    this.renderer.setAttribute(this.el.nativeElement, 'card-title2', '')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#002144');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2, 
    private elementRef: ElementRef, 
    private cp: CurrencyPipe,) {}

  convertToCurrency(value:any): any {
    // return this.cp.transform(value, 'USD', '', '1.2-2');
    // return parseFloat(value).toFixed(2);
  }

  normalize(value: string): number | string {
    return value === null || value === '' ? 0 : this.convertToCurrency(value);
  }

}
