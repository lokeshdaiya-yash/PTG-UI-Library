import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatDatatableComponent } from './mat-datatable.component';
import {MatDatatableModule} from '../mat-datatable.module'
import { GRID_DATA } from '@ptg-angular-app/mock/grid-data';

export default {
  title: 'Component/MatDatatableComponent',
  component: MatDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatDatatableModule],
    }),
  ],
} as Meta<MatDatatableComponent>;

const Template: Story<MatDatatableComponent> = (
  args: MatDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  totalCount: 20,
  limit: 10,
  showFiter: true,
};


export const EmptyStateMessage = Template.bind({});
EmptyStateMessage.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  totalCount: 20,
  limit: 10,
  showFiter: true,
};


export const TotalCount = Template.bind({});
TotalCount.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  totalCount: 20,
  limit: 10,
  showFiter: true,
};


export const Limit = Template.bind({});
Limit.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  totalCount: 20,
  limit: 10,
  showFiter: true,
};


export const ShowFilter = Template.bind({});
ShowFilter.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  totalCount: 20,
  limit: 10,
  showFiter: true,
};



