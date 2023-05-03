import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatDatatableComponent } from './mat-datatable.component';

export default {
  title: 'Component/MatDatatableComponent',
  component: MatDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
  data: [],
  emptyStateMessage: 'No data matching the filter',
  totalCount: 20,
  offset: 0,
  limit: 10,
  showFiter: false,
};
