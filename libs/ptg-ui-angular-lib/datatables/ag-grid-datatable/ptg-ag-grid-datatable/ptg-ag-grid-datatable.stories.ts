import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PtgAgGridDatatableComponent } from './ptg-ag-grid-datatable.component';

import {PtgAgGridDatatableModule} from '../ptg-ag-grid-datatable.module'

export default {
  title: 'Component/PtgAgGridDatatableComponent',
  component: PtgAgGridDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [PtgAgGridDatatableModule],
    }),
  ],
} as Meta<PtgAgGridDatatableComponent>;
export const GRID_DATA:any= [
  { 
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
    "id":2,
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
  { 
    "id":3,
    "athlete": "Michael Phelps",
    "age": 27,
    "country": "United States",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Swimming",
    "gold": 4,
    "silver": 2,
    "total": 6
  },
  {
    "id":4,
    "athlete": "Natalie Coughlin",
    "age": 25,
    "country": "United States",
    "year": 2008,
    "date": "24/08/2008",
    "sport": "Swimming",
    "gold": 2,
    "silver": 2,
    "total": 4
  },
  {
    "id":5,
    "athlete": "Aleksey Nemov",
    "age": 24,
    "country": "Russia",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Gymnastics",
    "gold": 2,
    "silver": 1,
    "total": 3
  },
  {
    "id":6,
    "athlete": "Alicia Coutts",
    "age": 24,
    "country": "Australia",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Swimming",
    "gold": 1,
    "silver": 3,
    "total": 4
  },
  {
    "id":7,
    "athlete": "Missy Franklin",
    "age": 17,
    "country": "United States",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Swimming",
    "gold": 4,
    "silver": 0,
    "total": 4
  },
  {
    "id":8,
    "athlete": "Ryan Lochte",
    "age": 27,
    "country": "United States",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Swimming",
    "gold": 2,
    "silver": 3,
    "total": 5
  },
  {
    "id":9,
    "athlete": "Allison Schmitt",
    "age": 22,
    "country": "United States",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Swimming",
    "gold": 3,
    "silver": 1,
    "total": 4
  },
  {
    "id":10,
    "athlete": "Natalie Coughlin",
    "age": 21,
    "country": "United States",
    "year": 2004,
    "date": "29/08/2004",
    "sport": "Swimming",
    "gold": 2,
    "silver": 2,
    "total": 4
  },
  {
    "id":11,
    "athlete": "Ian Thorpe",
    "age": 17,
    "country": "Australia",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 3,
    "silver": 2,
    "total": 5
  },
  {
    "id":12,
    "athlete": "Dara Torres",
    "age": 33,
    "country": "United States",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 2,
    "silver": 0,
    "total": 2
  },
  {
    "id":13,
    "athlete": "Cindy Klassen",
    "age": 26,
    "country": "Canada",
    "year": 2006,
    "date": "26/02/2006",
    "sport": "Speed Skating",
    "gold": 1,
    "silver": 2,
    "total": 3
  },
  {
    "id":14,
    "athlete": "Nastia Liukin",
    "age": 18,
    "country": "United States",
    "year": 2008,
    "date": "24/08/2008",
    "sport": "Gymnastics",
    "gold": 1,
    "silver": 3,
    "total": 4
  },
  {
    "id":15,
    "athlete": "Marit Bjørgen",
    "age": 29,
    "country": "Norway",
    "year": 2010,
    "date": "28/02/2010",
    "sport": "Cross Country Skiing",
    "gold": 3,
    "silver": 1,
    "total": 4
  },
  {
    "id":16,
    "athlete": "Sun Yang",
    "age": 20,
    "country": "China",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Swimming",
    "gold": 2,
    "silver": 1,
    "total": 3
  },
  {
    "id":17,
    "athlete": "Kirsty Coventry",
    "age": 24,
    "country": "Zimbabwe",
    "year": 2008,
    "date": "24/08/2008",
    "sport": "Swimming",
    "gold": 1,
    "silver": 3,
    "total": 4
  },
  {
    "id":18,
    "athlete": "Libby Lenton-Trickett",
    "age": 23,
    "country": "Australia",
    "year": 2008,
    "date": "24/08/2008",
    "sport": "Swimming",
    "gold": 2,
    "silver": 1,
    "total": 3
  },
  {
    "id":19,
    "athlete": "Ryan Lochte",
    "age": 24,
    "country": "United States",
    "year": 2008,
    "date": "24/08/2008",
    "sport": "Swimming",
    "gold": 2,
    "silver": 0,
    "total": 2
  },
  {
    "id":20,
    "athlete": "Inge de Bruijn",
    "age": 30,
    "country": "Netherlands",
    "year": 2004,
    "date": "29/08/2004",
    "sport": "Swimming",
    "gold": 1,
    "silver": 1,
    "total": 2
  },
  {
    "id":21,
    "athlete": "Petria Thomas",
    "age": 28,
    "country": "Australia",
    "year": 2004,
    "date": "29/08/2004",
    "sport": "Swimming",
    "gold": 3,
    "silver": 1,
    "total": 4
  },
  {
    "id":22,
    "athlete": "Ian Thorpe",
    "age": 21,
    "country": "Australia",
    "year": 2004,
    "date": "29/08/2004",
    "sport": "Swimming",
    "gold": 2,
    "silver": 1,
    "total": 3
  },
  {
    "id":23,
    "athlete": "Inge de Bruijn",
    "age": 27,
    "country": "Netherlands",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 3,
    "silver": 1,
    "total": 4
  },
  {
    "id":24,
    "athlete": "Gary Hall Jr.",
    "age": 25,
    "country": "United States",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 2,
    "silver": 1,
    "total": 3
  },
  {
    "id":25,
    "athlete": "Michael Klim",
    "age": 23,
    "country": "Australia",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 2,
    "silver": 2,
    "total": 4
  },
  {
    "id":26,
    "athlete": "Susie O'Neill",
    "age": 27,
    "country": "Australia",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 1,
    "silver": 3,
    "total": 4
  },
  {
    "id":27,
    "athlete": "Jenny Thompson",
    "age": 27,
    "country": "United States",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 3,
    "silver": 0,
    "total": 3
  },
  {
    "id":28,
    "athlete": "Pieter van den Hoogenband",
    "age": 22,
    "country": "Netherlands",
    "year": 2000,
    "date": "01/10/2000",
    "sport": "Swimming",
    "gold": 2,
    "silver": 0,
    "total": 2
  },
  {
    "id":29,
    "athlete": "An Hyeon-Su",
    "age": 20,
    "country": "South Korea",
    "year": 2006,
    "date": "26/02/2006",
    "sport": "Short-Track Speed Skating",
    "gold": 3,
    "silver": 0,
    "total": 3
  },
  {
    "id":30,
    "athlete": "Aliya Mustafina",
    "age": 17,
    "country": "Russia",
    "year": 2012,
    "date": "12/08/2012",
    "sport": "Gymnastics",
    "gold": 1,
    "silver": 1,
    "total": 2
  }
]
const Template: Story<PtgAgGridDatatableComponent> = (
  args: PtgAgGridDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};



export const ThemeClassName = Template.bind({});
ThemeClassName.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const Sortable = Template.bind({});
Sortable.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};



export const Editable = Template.bind({});
Editable.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const RowHeight = Template.bind({});
RowHeight.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const RowClass = Template.bind({});
RowClass.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
    rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const Pagination = Template.bind({});
Pagination.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const PaginationLimit = Template.bind({});
PaginationLimit.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const CustomPaginationClass = Template.bind({});
CustomPaginationClass.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const RowSelection = Template.bind({});
RowSelection.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowDrag: false,
  animateRow: true,
  rowClass: '',
  rowSelection: 'multiple',
  filter: true,
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};
