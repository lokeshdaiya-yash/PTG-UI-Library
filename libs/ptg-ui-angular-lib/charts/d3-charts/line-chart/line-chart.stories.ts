import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LineChartComponent } from './line-chart.component';
import { BAR_CHART_D3, LINE_CHART_D3, PIE_CHART_D3 } from '../../../../../assets/mock/chart';
import {ChartModule} from '../../chart.module';

export default {
  title: 'Component/LineChartComponent',
  component: LineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<LineChartComponent>;

const Template: Story<LineChartComponent> = (args: LineChartComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: LINE_CHART_D3.data,
  margin: LINE_CHART_D3.margin,
  width: LINE_CHART_D3.width,
  height: LINE_CHART_D3.height,
};

export const Width = Template.bind({});
Width.args = {
  data: LINE_CHART_D3.data,
  margin: LINE_CHART_D3.margin,
  width: LINE_CHART_D3.width,
  height: LINE_CHART_D3.height,
};

export const Height = Template.bind({});
Height.args = {
  data: LINE_CHART_D3.data,
  margin: LINE_CHART_D3.margin,
  width: LINE_CHART_D3.width,
  height: LINE_CHART_D3.height,
};
