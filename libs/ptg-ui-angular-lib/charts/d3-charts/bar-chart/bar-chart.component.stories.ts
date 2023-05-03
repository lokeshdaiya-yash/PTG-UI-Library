import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BarChartComponent } from './bar-chart.component';

export default {
  title: 'Component/BarChartComponent',
  component: BarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BarChartComponent>;

const Template: Story<BarChartComponent> = (args: BarChartComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
