import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptg-ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Victor Wayne' },
    { id: 3, name: 'Jane Doe' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
