/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample3;
 * @description This component for drag and drop example3
 **/

import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DONE, TODO } from '@ptg-angular-app/mock/mocks';
import { resources } from '../../../../resource/resource';

@Component({
  selector: 'ptg-ui-dragexample3',
  templateUrl: './dragexample3.component.html',
  styleUrls: ['./dragexample3.component.scss'],
})
export class Dragexample3Component implements OnInit {
  todo = TODO;
  done = DONE;
  resources = resources;

  constructor() {}

  ngOnInit(): void {}

  // Drop method for example 2
  drop(event: CdkDragDrop<string[]> | any) {
    console.log('drop', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
