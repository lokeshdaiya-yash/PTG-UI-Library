import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StackedColumnChartComponent } from './stacked-column-chart.component';

export default {
  title: 'Component/StackedColumnChartComponent',
  component: StackedColumnChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<StackedColumnChartComponent>;

const Template: Story<StackedColumnChartComponent> = (
  args: StackedColumnChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
