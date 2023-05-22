import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighPieChartComponent } from './high-pie-chart.component';
import {ChartModule} from '../../../chart.module';
import { BAR_CHART_3D, LINE_BAR_DATA, LINE_CHART_2D, MULTI_LINE_CHART_2D, PIE_CHART_3D, STACKED_COLUMN_DATA } from '@ptg-angular-app/mock/chart';

export default {
  title: 'Component/HighPieChartComponent',
  component: HighPieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<HighPieChartComponent>;

const Template: Story<HighPieChartComponent> = (
  args: HighPieChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  colors: ['#242582', '#8D8741', '#659DBD', '#BC986A', '#FBEEC1'],
  data:PIE_CHART_3D.data
};
