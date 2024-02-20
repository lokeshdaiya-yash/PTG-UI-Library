import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { resources } from '../../../../resource/resource';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss'],
})
export class NgxDatatableComponent implements OnInit {
  constructor(private mocksApiService: mocksService) {}
  ngxdata: any;
  columns: any;
  offset: number = 0;
  rowClass: string = '';
  SelectionType = SelectionType;
  temp = [];
  resources = resources;
  expandFlag: boolean = false;

  ngxDatatableHtmlCode = `
    <ptg-ui-ptg-ngx-datatable
      [rows]="tableData"
      [columns]="columns"
      [limit]="10"
      (getFilterEvent)="updateFilter($event)"
      [offset]="offset"
      (getSelectionEvent) ="onSelect($event)"
      [hScroll]="true"
      (getActionEvent)="getAction($event)"
      [showActionButton]="true"
      >
    </ptg-ui-ptg-ngx-datatable>
  `;

  ngxDatatableTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'ngx-datatable-component',
    templateUrl: './ngx-datatable-component.html'
  })
  export class NgxDatatableComponent {
    // Data required for the Ngx Datatable
    tableData: [{
        "id":1,
        "athlete": "Michael Phelps",
        "age": 23,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 8,
        "silver": 0,
        "total": 8
      },
      {
        "id":11,
        "athlete": "Michael Phelps",
        "age": 19,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 6,
        "silver": 2,
        "total": 8
      },
    ],

    ngOnInit() {
      this.columnData = [
        {headerName: 'Athlete', field: 'athlete'},
        {headerName: 'Age', field: 'age'},
        {headerName: 'Country', field: 'country'},
        {headerName: 'Year', field: 'year'},
        {headerName: 'Date', field: 'date'},
        {headerName: 'Sport', field: 'sport'},
        {headerName: 'Silver', field: 'silver'},
        {headerName: 'Total', field: 'total'},
        {
          headerName: '',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
          label: 'Click Here'
        },
      ]
    }

    updateFilter(event: any) {
    }

    onSelect(event: any){
      // console.log(event);
    }

    getAction(event:any){
      // console.log(event);
    }
  }`;

  ngxDataTablAccordionTsCode = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'ngx-datatable-component',
    templateUrl: './ngx-datatable-component.html'
  })
  export class NgxDatatableComponent {
    offset: number = 0;
    expandFlag: boolean= false;
    // Data required for the Ngx Datatable
    tableData: [{
        "id":1,
        "athlete": "Michael Phelps",
        "age": 23,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 8,
        "silver": 0,
        "total": 8
      },
      {
        "id":11,
        "athlete": "Michael Phelps",
        "age": 19,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 6,
        "silver": 2,
        "total": 8
      },
    ],

    ngOnInit() {
      this.columnData = [
        {headerName: 'Athlete', field: 'athlete'},
        {headerName: 'Age', field: 'age'},
        {headerName: 'Country', field: 'country'},
        {headerName: 'Year', field: 'year'},
        {headerName: 'Date', field: 'date'},
        {headerName: 'Sport', field: 'sport'},
        {headerName: 'Silver', field: 'silver'},
        {headerName: 'Total', field: 'total'},
        {
          headerName: '',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
          label: 'Click Here'
        },
      ]
    }

    updateFilter(event: any) {
    }

    onSelect(event: any){
      // console.log(event);
    }

    getAction(event:any){
      // console.log(event);
    }

    displayAccordion(rowData:any): any{
      return "<div className='mt-3 mb-3'>
            <h5>Custom Detail Panel</h5>
            <h6>Total: {rowData?.total}</h6>
            <h6>Country: {rowData?.country}</h6>
        </div>"
    }
  
    expandAllRows(){
      this.expandFlag = !this.expandFlag;
    }
  `;

  ngxDataTablAccordionHtmlCode = `
  <h3 class="mb-3">NGX Datatable with Accordion
    <button class="btn btn-primary ms-5" type="button" (click)="expandAllRows()" *ngIf="!expandFlag">Expand All</button>
    <button class="btn btn-primary ms-5" type="button" (click)="expandAllRows()" *ngIf="expandFlag">Collapse All</button>
  </h3>
  <ptg-ui-ptg-ngx-datatable
    [rows]="ngxdata"
    [columns]="columnData"
    [limit]="10"
    (getFilterEvent)="updateFilter($event)"
    [offset]="offset"
    (getSelectionEvent)="onSelect($event)"
    [hScroll]="true"
    (getActionEvent)="getAction($event)"
    [showActionButton]="true"
    [displayAccordion] ="displayAccordion"
    [expandAll]="expandFlag"
  >
  </ptg-ui-ptg-ngx-datatable>
  `;

  ngOnInit(): void {
    this.temp = this.ngxdata;
    this.columns = [
      { name: 'Athlete', field: 'athlete', frozenLeft: true ,checkboxable:true},
      { name: 'Age', field: 'age', filtering: true },
      { name: 'Country', field: 'country', filtering: false },
      { name: 'Year', field: 'year', filtering: false },
      { name: 'Date', field: 'date', filtering: false },
      { name: 'Sport', field: 'sport', filtering: false },
      { name: 'Gold', field: 'gold', filtering: false },
      { name: 'Silver', field: 'silver', filtering: false },
      { name: 'Total', field: 'total', filtering: false },
    ];
    this.mocksApiService.getTableList().subscribe((response) => {
      this.ngxdata = response?.data[0].attributes.grid;
    });
  }

  // Filter functions
  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d: any) {
      return d.athlete.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.ngxdata = temp;
    // Whenever the filter changes, always go back to the first page
    this.offset = 0;
  }

  onSelect(event: any) {
    // console.log(event);
  }

  getAction(event: any) {
    // console.log(event);
  }

  displayAccordion(rowData: any) {
    const tableData= `<div class="datatable-container">
    <table class="datatable " style="color: green;" >
      <thead>
        <tr>
          <th>Athlete</th>
          <th>Age</th>
          <th>Country</th>
          <th>Year</th>
          <th>Date</th>
          <th>Sport</th>
          <th>Gold</th>
          <th>Silver</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${rowData.athlete}</td>
          <td>${rowData.age}</td>
          <td>${rowData.country}</td>
          <td>${rowData.year}</td>
          <td>${rowData.date}</td>
          <td>${rowData.sport}</td>
          <td>${rowData.gold}</td>
          <td>${rowData.silver}</td>
          <td>${rowData.total}</td>
        </tr>
      </tbody>
    </table>
  </div>`;
  return tableData;
  }

  expandAllRows() {
    this.expandFlag = !this.expandFlag;
  }
}
