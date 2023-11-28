import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare let hljs: any;

@Component({
  selector: "ptg-ui-toggle-code",
  templateUrl: './toggle-code.component.html',
  styleUrls: ['./toggle-code.component.scss']
})
export class ToggleCodeComponent implements AfterViewInit {
  @ViewChild('htmlCodeBlock') htmlCodeBlock!: ElementRef;
  @ViewChild('typeScriptCode') tsElement!: ElementRef;
  @Input() htmlCode = '';
  @Input() tsCode = '';

  isCollapsed = false;

  ngAfterViewInit() {
    hljs.highlightBlock(this.htmlCodeBlock.nativeElement);
    hljs.highlightBlock(this.tsElement.nativeElement);
  }
}
