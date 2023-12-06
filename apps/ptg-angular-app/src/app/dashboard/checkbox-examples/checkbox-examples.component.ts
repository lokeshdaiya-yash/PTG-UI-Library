/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, } from '@angular/core';
import { CHECKBOX_ARRAY } from '@ptg-angular-app/mock/mocks';
import { resources } from "../../../resource/resource";

@Component({
  selector: 'ptg-ui-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss']
})
export class CheckboxExamplesComponent {
  checkBoxData = CHECKBOX_ARRAY;
  resources=resources

  treeViewHtmlCode = `
    <ptg-ui-indeterminate-checkboxes [checkBoxList]="treeData"
      (onCheckboxValueChanges)="onChanges($event)"
    ></ptg-ui-indeterminate-checkboxes>
  `;
  treeViewTsCode = `
  import { Component } from '@angular/core';
  import { TreeviewItem } from "ngx-treeview";

  @Component({
    selector: 'tree-view-component',
    templateUrl: './tree-view-component.html'
  })
  export class TreeViewComponent {
    // Data required to display in tree view
    treeData = new TreeviewItem({
      text: 'IT', value: 9, children: [
        {
          text: 'Programming', value: 91, children: [{
            text: 'Frontend', value: 911, children: [
              { text: 'Angular JS', value: 9111 },
              { text: 'Angular 2', value: 9112 },
              { text: 'ReactJS', value: 9113}
            ]
          }, {
            text: 'Backend', value: 912, children: [
              { text: 'C#', value: 9121 },
              { text: 'Java', value: 9122 },
              { text: 'Python', value: 9123}
            ]
          }]
        },
        {
          text: 'Networking', value: 92, children: [
            { text: 'Internet', value: 921 },
            { text: 'Security', value: 922 }
          ]
        }
      ]
    });

    onChanges(event:any){
      console.log(On Change event, 'event');
    }
  }
  `;

  onChanges(event: any){
    console.log(event, 'event');
  }
}
