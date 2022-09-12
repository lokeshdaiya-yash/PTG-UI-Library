/**
 * @since May 2022
 * @author Aakash Patidar
 * @Component ptg-ui-accordian;
 * @description This component for accordian;
**/

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ptg-ui-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  @Input() listData: any;
  @Input() isAnimated: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() oneAtATime: boolean = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // onAccordina change state 
  change(event:any){
      this.onChange.emit(event);
  }

}
