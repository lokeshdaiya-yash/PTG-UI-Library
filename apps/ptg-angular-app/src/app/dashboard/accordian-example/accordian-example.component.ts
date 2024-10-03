import { Component } from '@angular/core';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-accordian-example',
  templateUrl: './accordian-example.component.html',
  styleUrls: ['./accordian-example.component.scss'],
})
export class AccordianExampleComponent{
  label = 'Bacon Ipsum';
  description = 'Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  bgColor ='white';
  defaultOpened = false;

  htmlCode = `
  <ptg-accordion [label]="label" [description]="description" [bgColor]="bgColor" [defaultOpened]="defaultOpened">`;

  tsCode = `
    import { Component } from '@angular/core';
    @Component({
      selector: 'ptg-ui-accordian-example',
      templateUrl: './accordian-example.component.html',
      styleUrls: ['./accordian-example.component.scss']
    })
    export class DemoAccordianComponent {
      data = [
        {title: 'Static Header', description: 'Accordian Content Area'},
        {title: 'Header 2', description: 'Content Description'}
      ]
    }`;

  accordianData: any;
  isLoaded=true;
  constructor(private mocksApiService: mocksService) {}

  ngOnInit(): void {
    this.mocksApiService.getAccordianData().subscribe((response) => {
      this.accordianData = response?.data[0].attributes.data;
    });
  }
}
