import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighLineChartComponent } from './high-line-chart.component';

import {ChartModule} from '../../../chart.module';
export const LINE_CHART_2D:any = {
  data: [
    {
      name: 'Year 1800',
      data: [7.0, 6.9, 9.5, 14.5, 18.2]
    }
  ],
  categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
}
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