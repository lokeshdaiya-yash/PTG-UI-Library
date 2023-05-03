import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PtgNgxDatatableComponent } from './ptg-ngx-datatable.component';

export default {
  title: 'Component/PtgNgxDatatableComponent',
  component: PtgNgxDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
  limit: 1,
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
