import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LineChartComponent } from './line-chart.component';

export default {
  title: 'Component/LineChartComponent',
  component: LineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<LineChartComponent>;

const Template: Story<LineChartComponent> = (args: LineChartComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
