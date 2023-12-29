/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-select;
 * @description This component for select
 **/

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ptg-ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
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
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() id!: string;
  @Input() parentForm: any;
  @Input() fieldname!: string;
  @Input() placeholder: any = '';
  @Input() items: any;
  @Input() bindLabel!: string;
  @Input() bindValue!: string;
  @Input() isMultiple!: boolean;
  @Input() closeOnSelect!: boolean;
  // @Input() accessKey = '';
  @Input() itemCount = 3;
  @Output() change: EventEmitter<any> = new EventEmitter();
  textLimit = '10';
  selectedValue: any = [];

  // get formField(): FormControl {
  //   return this.parentForm?.get(this.fieldname) as FormControl;
  // }

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.selectedValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {

    // this.selectedValue = [this.items[0].name]
    // this.selectedValue = this.items[0].name;
  }

  onchangeSelection(event: any) {
    this.change.emit(event);
    // this.onChange(event);
    console.log(this.isMultiple)
    if (this.isMultiple==false) {
      this.onChange(event?.name);
      console.log(!this.isMultiple)
    } else if (this.isMultiple==true && !event?.target) {
      const selected= event && event.map((item: { [x: string]: any }) => item['name']);
      this.onChange(selected);
      console.log(this.isMultiple)
    }
  }
  inputChange() {
  }

  selectUnselectAll(
    isChecked: any,
    items: any[],
    control: any,
    bindValue: string | number
  ): void {
    if (isChecked.checked) {
      const selected =
        items && items.map((item: { [x: string]: any }) => item[bindValue]);
      this.onChange(selected);
      // this.parentForm.get(control).patchValue(selected);
      // this.parentForm.updateValueAndValidity();
    } else {
      this.onChange([]);
      // this.parentForm.get(control).patchValue([]);
      // this.parentForm.updateValueAndValidity();
    }
  }

  handleBlur() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }
}
