import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighLineChartComponent } from './high-line-chart.component';
import {LINE_CHART_2D} from './high-line-chart'
import {ChartModule} from '../../../chart.module';


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
   chartId: 'line-chart',
  data: LINE_CHART_2D.data
};


export const ChartId = Template.bind({});
ChartId.args = {
   chartId: 'line-chart',
   data: LINE_CHART_2D.data
};