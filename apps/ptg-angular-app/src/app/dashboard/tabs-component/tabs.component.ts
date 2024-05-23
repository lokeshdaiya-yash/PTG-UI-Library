import { Component } from '@angular/core';

@Component({
  selector: 'ptg-tabs-example',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsExampleComponent {
  htmlCode = `
      <ptg-tabs 
      [tabLabelArray]="tabList"
      >
      </ptg-tabs>`;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ptg-tabs-example',
      templateUrl: './tabs-example.component.html'
    })
    export class TabsExampleComponent {
      tabList = [
        { 
          "label" : "One",
          "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing and graphic design",
          "checked" : true
        }, 
        {
          "label" : "Two",
          "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing",
          "checked" : false
        },
        {
          "label" : "Three",
          "content" : "In publishing and graphic design, Lorem ipsum is a placeholder.",
          "checked" : false
        },
        {
          "label" : "Four",
          "content" : "In publishing and graphic design, Lorem ipsum is a placeholder.",
          "checked" : false
        },
      ];
    ;
    }`;

  tabList = [
    { 
      "label" : "One",
      "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing and graphic design",
      "checked" : false
    }, 
    {
      "label" : "Two",
      "content" : "In publishing and graphic design, Lorem ipsum is a placeholder. In publishing",
      "checked" : true
    },
    {
      "label" : "Three",
      "content" : "In publishing and graphic design, Lorem ipsum is a placeholder.",
      "checked" : false
    },
    {
      "label" : "Four",
      "content" : "In publishing and graphic design, Lorem ipsum is a placeholder.",
      "checked" : false
    },
  ];
}
