import { Component, OnInit } from '@angular/core';
import { GRID_DATA } from '@ptg-angular-app/mock/grid-data';
import { resources } from "../../../../resource/resource";

@Component({
  selector: 'ptg-ui-material-datatable',
  templateUrl: './material-datatable.component.html',
  styleUrls: ['./material-datatable.component.scss']
})
export class MaterialDatatableComponent implements OnInit {
  data = GRID_DATA;
  dataColumns:any;
  resources=resources;

  ngOnInit(): void {
    this.dataColumns = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'];
  }

  // pagination functionlity start here
  paginate(event:any){
    // console.log('pagination changed', event);
  }

  getValue(){
    alert('Button clicked')
  }
}
