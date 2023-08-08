/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CHECKBOX_ARRAY } from '@ptg-angular-app/mock/mocks';
import { resources } from '../../../resource/resource';

@Component({
  selector: 'ptg-ui-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss'],
})
export class CheckboxExamplesComponent {
  checkBoxData = CHECKBOX_ARRAY;
  resources = resources;

  onChanges(event: any) {
    console.log(event, 'event');
  }
}
