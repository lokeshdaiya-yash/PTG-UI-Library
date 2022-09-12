import { Component, OnInit } from '@angular/core';
import { ACCORDIAN_DATA } from '@ptg-angular-app/mock/mocks';

@Component({
  selector: 'ptg-ui-accordian-example',
  templateUrl: './accordian-example.component.html',
  styleUrls: ['./accordian-example.component.scss']
})
export class AccordianExampleComponent implements OnInit {
data= ACCORDIAN_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
