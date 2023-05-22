import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighLineChartComponent } from './high-line-chart.component';
import { BAR_CHART_3D, LINE_BAR_DATA, LINE_CHART_2D, MULTI_LINE_CHART_2D, PIE_CHART_3D, STACKED_COLUMN_DATA } from '@ptg-angular-app/mock/chart';
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