/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample5;
 * @description This component for drag and drop example5
**/

import { Component, OnInit } from '@angular/core';
@Component({
      selector: 'ptg-ui-dragexample5',
      templateUrl: './dragexample5.component.html',
      styleUrls: ['./dragexample5.component.scss'],
    })
    export class Dragexample5Component implements OnInit{
  items: string[] = [];
  gridItems: string[] = []; 
  dragAndDropHtmlCode = `
<div  class="container mt-4">
<h3 class="mt-5">Drag and Drop in a Grid</h3>
<ptg-ui-toggle-code
[htmlCode]="dragAndDropHtmlCode"
[tsCode]="dragAndDropTsCode"
>
</ptg-ui-toggle-code>
  <div class="row mt-5">
    <div class="col-4" *ngFor="let item of gridItems; let i = index">
      <div
        class="card mb-3"
        draggable="true"
        (dragstart)="onGridDragStart($event, i)"
        (dragover)="allowDrop($event)"
        (drop)="onGridDrop($event)"
        [attr.data-index]="i"
      >
        <div class="card-body">
          <h5 class="card-title">{{ item }}</h5>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  dragAndDropTsCode = `
  import { Component, OnInit } from '@angular/core';
@Component({
      selector: 'ptg-ui-dragexample5',
      templateUrl: './dragexample5.component.html',
      styleUrls: ['./dragexample5.component.scss'],
    })
    export class Dragexample5Component implements OnInit{
  items: string[] = [];
  gridItems: string[] = []; 

  ngOnInit() {
    this.setGridItems(6); 
  }
  generateGridItems(count: number) {
    this.gridItems = Array.from({ length: count }, (_, i) =>
     Item $'{i + 1}); //use tamplet literals for item
  }
  setGridItems(count: number) {
    this.generateGridItems(count);
  }

  onGridDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }
  
  onGridDrop(event: DragEvent) {
    event.preventDefault();
    const fromIndex = Number(event.dataTransfer?.getData('text/plain'));
    const toIndex = Number((event.currentTarget as HTMLElement).getAttribute('data-index'));
  
    if (fromIndex !== toIndex) {
      const movedItem = this.gridItems[fromIndex];
      this.gridItems.splice(fromIndex, 1);
      this.gridItems.splice(toIndex, 0, movedItem);
    }
  }
    allowDrop(event: DragEvent) {
     event.preventDefault();
  }

}
  `;

  ngOnInit() {
    this.setGridItems(6); // Pass the count directly 
  }
  generateGridItems(count: number) {
    this.gridItems = Array.from({ length: count }, (_, i) => `Item ${i + 1}`);
  }


  setGridItems(count: number) {
    this.generateGridItems(count);
  }

  onGridDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }
  
  onGridDrop(event: DragEvent) {
    event.preventDefault();
    const fromIndex = Number(event.dataTransfer?.getData('text/plain'));
    const toIndex = Number((event.currentTarget as HTMLElement).getAttribute('data-index'));
  
    if (fromIndex !== toIndex) {
      const movedItem = this.gridItems[fromIndex];
      this.gridItems.splice(fromIndex, 1);
      this.gridItems.splice(toIndex, 0, movedItem);
    }
  }
    allowDrop(event: DragEvent) {
     event.preventDefault();
  }

}
