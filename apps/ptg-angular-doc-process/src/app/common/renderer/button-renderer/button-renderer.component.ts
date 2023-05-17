import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community'
@Component({
  selector: 'ptg-ui-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.scss']
})
export class ButtonRendererComponent implements ICellRendererAngularComp {

  params: any;
  label: string;
  buttons: any;

  agInit(params: any): void {
    this.params = params;
    this.buttons = this.params.buttonsValues;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event: any, label:any) {
    // debugger;
    if (this.buttons[0].onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        label: label
        // ...something
      }
      this.buttons[0].onClick(params);
    }
  }
  ngOnInit(): void {
  }

}
