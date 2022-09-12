import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'ptg-ui-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements ICellRendererAngularComp {
  params:any;
  label: string = '';

  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(): boolean {
    return true;
  }

  onClick(event:any) {
    alert('Button Clicked');
  }

}
