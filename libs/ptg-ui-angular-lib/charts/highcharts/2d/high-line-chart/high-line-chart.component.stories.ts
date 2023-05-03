import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighLineChartComponent } from './high-line-chart.component';

export default {
  title: 'Component/HighLineChartComponent',
  component: HighLineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HighLineChartComponent>;

const Template: Story<HighLineChartComponent> = (
  args: HighLineChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: [],
  chartId: 'line-chart',
};
