import { Component } from '@angular/core';
import { ACCORDIAN_DATA } from '@ptg-angular-app/mock/mocks';

@Component({
  selector: 'ptg-ui-accordian-example',
  templateUrl: './accordian-example.component.html',
  styleUrls: ['./accordian-example.component.scss']
})
export class AccordianExampleComponent {
  data= ACCORDIAN_DATA;
  htmlCode = `
  <ptg-ui-accordian [listData]="data"></ptg-ui-accordian>`;

  tsCode =
    `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-accordian-component',
      templateUrl: './demo-accordian.component.html'
    })
    export class DemoAccordianComponent {
      data = [
        {title: 'Static Header', description: 'Accordian Content Area'},
        {title: 'Header 2', description: 'Content Description'}
      ]
    }`

}
