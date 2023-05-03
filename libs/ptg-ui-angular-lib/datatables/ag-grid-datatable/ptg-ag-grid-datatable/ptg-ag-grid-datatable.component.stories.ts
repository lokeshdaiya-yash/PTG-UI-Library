import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PtgAgGridDatatableComponent } from './ptg-ag-grid-datatable.component';

export default {
  title: 'Component/PtgAgGridDatatableComponent',
  component: PtgAgGridDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<PtgAgGridDatatableComponent>;

const Template: Story<PtgAgGridDatatableComponent> = (
  args: PtgAgGridDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
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
