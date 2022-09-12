/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-input;
 * @description This component for input
 **/

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ptg-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: '',
    '(blur)': 'handleBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  // @Input() parentForm!: FormGroup;
  // @Input() fieldname!: string;
  @Input() placeholder: string | undefined | null = '';
  @Input() bindValue = '';
  @Input() className = '';
  @Input() type = 'text';
  @Input() id = '';
  @Input() value = '';
  @Input() accessKey = '';
  @Input() aria_placeholder = '';
  @Input() maxlength!: string | number | null;
  @Input() minlength!: string | number | null;
  @ViewChild('input', { static: true }) input!: ElementRef;
  inputValue: any;

  // get formField(): FormControl {
  //   return this.parentForm?.get(this.fieldname) as FormControl;
  // }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  onChange = (_: any) => {};
  onTouched = () => {};
  ariaValueText() {
    return `${this.inputValue}`;
  }
  isInteractive(): boolean {
    // return !this.readonly && !this.disabled;
    return false;
  }

  writeValue(obj: any): void {
    this.inputValue = obj;
    this._changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onchangeInput(event: any) {
    this.onChange(event.value);
  }

  ngOnInit(): void {
    // this.input.nativeElement.accessKey = this.accessKey;
  }

  handleBlur() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }
}
