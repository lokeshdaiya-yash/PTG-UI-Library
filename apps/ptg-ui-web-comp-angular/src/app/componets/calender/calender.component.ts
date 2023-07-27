import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptg-ui-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  getCalendarValue(val: any) {
    console.log('val', val);
  }
  date = new Date('10/09/2021');
  ngOnInit(): void {}
}
