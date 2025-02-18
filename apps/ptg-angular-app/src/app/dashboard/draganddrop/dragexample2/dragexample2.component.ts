/* eslint-disable no-restricted-syntax */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample2;
 * @description This component for drag and drop example2
 **/

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ptg-ui-dragexample2',
  templateUrl: './dragexample2.component.html',
  styleUrls: ['./dragexample2.component.scss'],
})
export class Dragexample2Component implements OnInit{
  items: string[] = [];
  gridItems: string[] = []; 
  loading = true;
  dragAndDropHtmlCode = `HTML`;
  dragAndDropTsCode = `TS`;

  ngOnInit() {
    this.setItemCount(4); // Pass the count directly 
    
  }

  generateItems(count: number) {
    this.loading = false;
    this.items = Array.from({ length: count }, (_, i) => `Item ${i + 1}`);
  }

  setItemCount(count: number) {
    this.generateItems(count);
  }

  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent) {
    event.preventDefault(); 

    const fromIndex = Number(event.dataTransfer?.getData('text/plain'));
    const toIndex = Number((event.currentTarget as HTMLElement).getAttribute('data-index'));

    if (fromIndex !== toIndex) {
      const movedItem = this.items[fromIndex];
      this.items.splice(fromIndex, 1);
      this.items.splice(toIndex, 0, movedItem);
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

}