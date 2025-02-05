
import { Component, QueryList, ViewChildren } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop';
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
  inputCount = ['test'];
  codeKey = 'key';
  resources=resources;

  dragAndDropHtmlCode = `

  <div class="wrapper3 mt-2 p-2 bg-white rounded">
    <div class="row pb-2 text-center">
      <div>
        <button
          id="r_add_manual_btn"
          type="button"
          class="btn btn-primary"
          (click)="addManual()"
        >
          {{ 'ADD_MANUAL' | translate }}
        </button>
      </div>
    </div>
    <div
      class="drag-box-wrapper"
      [ngClass]="{ 'commitment-scroll': collectionArray.length > 0 }"
      [formGroup]="collectionForm"
      cdkDropList (cdkDropListDropped)="drop1($event)"
    >
      <ng-container formArrayName="collection">
        <ng-container
          *ngFor="let requirement of collectionArray.controls; let i = index"
          [formGroupName]="i"
        >
          <div class="drag-box d-flex justify-content-between" cdkDrag>
            <div class="d-flex">
              <div class="r-code-section">
                <input
                  #code
                  id="{{ codeKey }}_{{ i }}"
                  [formControlName]="codeKey"
                  class="item-name item-desc"
                  [ngClass]="{
                    'is-invalid': collectionArray.at(i).get(codeKey).errors
                  }"
                />
  
                <span
                  class="invalid-feedback"
                  *ngIf="
                    collectionArray.at(i).get(codeKey).errors?.invalidCode as error
                  "
                >
                  {{ error }}
                </span>
              </div>
            </div>
            <div class="d-flex r-code-section">
              <button
                id="r_reset_{{ i }}"
                class="icon-btn mx-1"
                (click)="resetCollection(i)"
              >
              <i class="fa-solid fa-arrow-rotate-right"></i>
              </button>
              <button
                id="r_delete_{{ i }}"
                class="icon-btn mx-1"
                (click)="deleteCollection(i)"
              >
              <i class="fa-solid fa-trash-can"></i>
              </button>
              <button id="r_drag_{{ i }}" class="icon-btn mx-1" cdkDragHandle>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </ng-container>
      </ng-container>
    </div>
  </div>
  `;

dragAndDropTsCode = `

  // Add Material dependency for the CDK "DragDropModule".

import { Component, QueryList, ViewChildren } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ptg-ui-dragexample4',
  templateUrl: './dragexample4.component.html',
  styleUrls: ['./dragexample4.component.scss']
})
export class Dragexample4Component {

  collectionForm!: FormGroup;
  currentCollection?: any;
  inputCount = ['test'];
  codeKey = 'key';

  @ViewChildren('code') codes!: QueryList<any>;

  get collectionArray(): any {
    return (
      this.collectionForm &&
      (this.collectionForm.get('collection') as FormArray)
    );
  }

  constructor(private fb: FormBuilder) {
    this.collectionForm = this.fb.group({
      collection: this.fb.array([]),
    });
   }

  // Method for add CollectionGroup
  addCollectionGroup(collection: any): FormGroup {
    const group = this.fb.group({
      [this.codeKey]: [collection[this.codeKey]]
    });
    return group;
  }

  // Method for delete list
  deleteCollection(i: any): void {
    this.collectionArray.controls.splice(i, 1);
  }

  // Method for reset list field
  resetCollection(i: any): void {
    this.collectionArray.controls[i]?.reset();
  }

  // Method for add list item
  addManual(): void {
    const collection: any = {
      [this.codeKey]: '',
    };
    this.collectionArray.push(this.addCollectionGroup(collection));
    setTimeout(() => {
      this.codes.last.nativeElement.focus();
    });
  }

  // Drop method for example 3
  drop1(event: CdkDragDrop<string[]>): void {

    moveItemInArray(
      this.collectionArray.controls,
      event.previousIndex,
      event.currentIndex
    );
  }
}
  `;

  @ViewChildren('code') codes!: QueryList<any>;

  get collectionArray(): any {
    return (
      this.collectionForm &&
      (this.collectionForm.get('collection') as FormArray)
    );
  }

  constructor(private fb: FormBuilder) {
    this.collectionForm = this.fb.group({
      collection: this.fb.array([]),
    });
   }

   /**
   * @functionality Example 3 - Manual add list   ;
   * @description This method returns form group for collection
   **/

  // Method for add CollectionGroup
  addCollectionGroup(collection: any): FormGroup {
    const group = this.fb.group({
      [this.codeKey]: [collection[this.codeKey]],
      // [this.descKey]: [collection[this.descKey]],
    });
    return group;
  }

  // Method for delete list
  deleteCollection(i: any): void {
    this.collectionArray.controls.splice(i, 1);
  }

  // Method for reset list field
  resetCollection(i: any): void {
    this.collectionArray.controls[i]?.reset();
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

  // Drop method for example 3
  drop1(event: CdkDragDrop<string[]>): void {

    moveItemInArray(
      this.collectionArray.controls,
      event.previousIndex,
      event.currentIndex
    );
  }
}
