import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighBarChartComponent } from './high-bar-chart.component';
import {ChartModule} from '../../../chart.module';
import { BAR_CHART_3D, } from '@ptg-angular-app/mock/chart';

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
