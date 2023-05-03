import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LinebarChartComponent } from './linebar-chart.component';

export default {
  title: 'Component/LinebarChartComponent',
  component: LinebarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<LinebarChartComponent>;

const Template: Story<LinebarChartComponent> = (
  args: LinebarChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
