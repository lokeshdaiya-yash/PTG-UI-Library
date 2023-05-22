/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-radio;
 * @description This component for radio
 **/

import {
  Component,
  forwardRef,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ptg-ui-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: '',
    '(blur)': 'handleBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioComponent),
    },
  ],
})
export class RadioComponent implements AfterViewInit {
  // @Input() parentForm!: FormGroup;
  // @Input() fieldname!: string;
  @Input() name = '';
  @Input() id = 'ptg-radio';
  @Input() items!: any;
  @Input() accessKey = '';
  @Input() aria_label = '';
  @ViewChild('input', { static: true }) input!: ElementRef;

  // get formField(): FormControl {
  //   return this.parentForm?.get(this.fieldname) as FormControl;
  // }

  selectedValue: any;


  constructor(
    private elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.selectedValue = obj;
    this._changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit() {
    this.items?.forEach((ele: any) => {
      if (ele.default) {
        this.selectedValue = ele.name;
        this.onChange(this.selectedValue);
      }
    });
    // this.addAccessKey();
  }

  onradioSelect(item: any) {
    this.selectedValue = item.name;
    this.onChange(this.selectedValue);
    this.onTouched();
  }

  // addAccessKey() {
  //   const selector = `#${this.id}0`;
  //   const element = this.elementRef.nativeElement.querySelector(selector);
  //   element.accessKey = this.accessKey;
  // }

  handleBlur() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }
}
