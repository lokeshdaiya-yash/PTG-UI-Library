/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample3;
 * @description This component for drag and drop example3
 **/

import { Component } from '@angular/core';
@Component({
  selector: 'ptg-ui-dragexample3',
  templateUrl: './dragexample3.component.html',
  styleUrls: ['./dragexample3.component.scss'],
})
export class Dragexample3Component {
  // Data required to drag and drop the box/element
  todoData = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doneData = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  dragAndDropHtmlCode = `HTML`;
  dragAndDropTsCode = `TS`;

  // Store the index of the dragged item
  draggedItemIndex: number | null = null;
  draggedFromList: 'todo' | 'done' | null = null;

  onDragStart(event: DragEvent, index: number, list: 'todo' | 'done') {
    this.draggedItemIndex = index;
    this.draggedFromList = list;
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent, targetList: 'todo' | 'done') {
    event.preventDefault();
    const fromIndex = this.draggedItemIndex;
    const toIndex = parseInt(event.dataTransfer?.getData('text/plain') || '0', 10);

    if (fromIndex !== null && this.draggedFromList !== null) {
      if (this.draggedFromList === targetList) {
        // Move within the same list
        const data = targetList === 'todo' ? this.todoData : this.doneData;
        const movedItem = data[fromIndex];
        data.splice(fromIndex, 1);
        data.splice(toIndex, 0, movedItem);
      } else {
        // Move between lists
        const fromData = this.draggedFromList === 'todo' ? this.todoData : this.doneData;
        const toData = targetList === 'todo' ? this.todoData : this.doneData;
        const movedItem = fromData[fromIndex];
        fromData.splice(fromIndex, 1);
        toData.splice(toIndex, 0, movedItem);
      }
    }

    // Reset dragged item index
    this.draggedItemIndex = null;
    this.draggedFromList = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}