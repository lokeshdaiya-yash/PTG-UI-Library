import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PtgNgxDatatableComponent } from './ptg-ngx-datatable.component';
import { PtgNgxDatatableModule } from '../ptg-ngx-datatable.module';
import { GRID_DATA } from '@ptg-angular-app/mock/grid-data';


export default {
  title: 'Component/PtgNgxDatatableComponent',
  component: PtgNgxDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [PtgNgxDatatableModule],
    }),
  ],
} as Meta<PtgNgxDatatableComponent>;

const Template: Story<PtgNgxDatatableComponent> = (
  args: PtgNgxDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: false,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  vScroll: false,
  hScroll: true,
  loaderShowWhen: false,
  totalCount: 100,
  offset: 0,
  limit: 2,
  virtualization: true,
  externalPaging: false,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action',
};
