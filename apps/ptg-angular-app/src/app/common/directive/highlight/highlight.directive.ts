/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import { Directive, AfterViewInit, ElementRef } from '@angular/core';


/**
 * @since Nov 2023
 * @author Nimish Jain
 * @Directive ptgUiHighlight;
 * @description This directive is used for highlighting the code snippet
 **/

declare let hljs: any;

@Directive({
  selector: '[ptgUiHighlight]',
})
export class HighlightCodeDirective implements AfterViewInit {
  constructor(private eltRef: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.eltRef.nativeElement);
  }
}
