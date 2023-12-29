/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Material datatable;
 * @description This component used for reusable material datatable
 */

import { OnInit, Component, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GRID_DATA } from '@ptg-angular-app/mock/grid-data';

// created interface for table dataSource 
export interface PeriodicElement {}

@Component({
  selector: 'ptg-ui-mat-datatable',
  templateUrl: './mat-datatable.component.html',
  styleUrls: ['./mat-datatable.component.scss']
})

export class MatDatatableComponent implements OnInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  // Basic
  // it will take data in array formate
  @Input() data: any = [];
  dataColumns:any;
  dataSource: any;
  
  // it will take every key name of element to create column
  @Input() columns: any;
  // get row value for do any action of specific row 
  @Output() getRowValue: EventEmitter<any> = new EventEmitter();
  // Show empty screen message 
  @Input() emptyStateMessage: string = 'No data matching the filter';

  // Paginaiton
  @Input() totalCount: number = 20;
  @Input() offset: number = 0;
  @Input() limit: number = 10;
  @Output() paginationData: EventEmitter<any> = new EventEmitter(); 

  // Filter functionlity 
  // show hide filter input 
  @Input() showFiter: boolean = false;
  // get event of filter and do filtering
  @Output() getFilterEvent: EventEmitter<any> = new EventEmitter();
  
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private cd: ChangeDetectorRef) {
  }
  
  ngOnInit(){
    this.data = GRID_DATA;
    this.dataColumns = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'];
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
      //  filter works for specific value 
      // this.dataSource.filterPredicate = function (record:any,filter:any) {
      //   return record.name.toLocaleLowerCase() == filter.toLocaleLowerCase();
      // }
     console.log(this.columns) 
  }

  getRow(row:any){
    // get row data from here
    this.getRowValue.emit(row);
  }

  onPaginate(event:any){
    this.paginationData.emit(event);
  }

  ngAfterViewInit() {
    // implimented ngAfterViewInit for paginatior
    this.dataSource.paginator = this.paginator;
  }

  // Default filter functionlity
  applyFilter(event:any){
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getValue(){
    alert('Button Clicked')
  }

}
