/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample4;
 * @description This component for drag and drop example4
**/

import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { resources } from "../../../../resource/resource";

@Component({
  selector: 'ptg-ui-dragexample4',
  templateUrl: './dragexample4.component.html',
  styleUrls: ['./dragexample4.component.scss']
})
export class Dragexample4Component {
  collectionForm!: FormGroup;
  currentCollection?: any;
  codeKey = 'key';
  resources = resources;
  dragAndDropHtmlCode = `HTML`;
  dragAndDropTsCode = `TS`;

  @ViewChildren('code') codes!: QueryList<any>;
  draggingIndex: number | null = null;

  get collectionArray(): FormArray {
    return this.collectionForm.get('collection') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.collectionForm = this.fb.group({
      collection: this.fb.array([]),
    });
  }

  // Method for add CollectionGroup
  addCollectionGroup(collection: any): FormGroup {
    return this.fb.group({
      [this.codeKey]: [collection[this.codeKey]],
    });
  }

  // Method for delete list
  deleteCollection(i: number): void {
    this.collectionArray.removeAt(i);
  }

  // Method for reset list field
  resetCollection(i: number): void {
    this.collectionArray.at(i)?.reset();
  }

  // Method for add list item
  addManual(): void {
    const collection: any = {
      [this.codeKey]: '',
    };
    this.collectionArray.push(this.addCollectionGroup(collection));

    // focus on last added row
    setTimeout(() => {
      this.codes.last.nativeElement.focus();
    });
  }

  // Start dragging
  onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  // Drop the item
  onDrop(index: number): void {
    if (this.draggingIndex !== null && this.draggingIndex !== index) {
      const movedItem = this.collectionArray.at(this.draggingIndex);
      this.collectionArray.removeAt(this.draggingIndex);
      this.collectionArray.insert(index, movedItem);
    }
    this.draggingIndex = null; // Reset dragging index
  }

  // Drag over event
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default to allow drop
  }
}