import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighBarChartComponent } from './high-bar-chart.component';
import {ChartModule} from '../../../chart.module';
import { BAR_CHART_3D, BAR_CHART_D3, LINE_CHART_D3, PIE_CHART_D3 } from '../../../../../../assets/mock/chart';

export default {
  title: 'Component/HighBarChartComponent',
  component: HighBarChartComponent,
  
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<HighBarChartComponent>;

const Template: Story<HighBarChartComponent> = (
  args: HighBarChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: BAR_CHART_3D.data,
  
};
