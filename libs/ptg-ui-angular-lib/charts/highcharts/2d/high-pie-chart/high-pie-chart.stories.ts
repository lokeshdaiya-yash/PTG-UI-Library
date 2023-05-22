import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighPieChartComponent } from './high-pie-chart.component';
import {ChartModule} from '../../../chart.module';
export const PIE_CHART_3D:any =
{
  data:[
    ['Firefox', 45.0],
    ['IE', 26.8],
    {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
    },
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ]
}

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
