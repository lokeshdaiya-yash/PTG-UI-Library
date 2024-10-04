import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dPieChartComponent } from './high-3d-pie-chart.component';
import {ChartModule} from '../../../chart.module';
import {PIE_CHART_3D} from './high-3d-pie-chart'

  // Mock data for 3d pie chart
  // export const PIE_CHART_3D:any =
  // {
  //   data:[
  //     ['Firefox', 45.0],
  //     ['IE', 26.8],
  //     {
  //         name: 'Chrome',
  //         y: 12.8,
  //         sliced: true,
  //         selected: true
  //     },
  //     ['Safari', 8.5],
  //     ['Opera', 6.2],
  //     ['Others', 0.7]
  //   ]
  // }

export default {
  title: 'Component/High3dPieChartComponent',
  component: High3dPieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<High3dPieChartComponent>;

const Template: Story<High3dPieChartComponent> = (
  args: High3dPieChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: PIE_CHART_3D.data,
  title: 'PIE_CHART_3D',
  };

export const Title = Template.bind({});
Title.args = {
  data: PIE_CHART_3D.data,
  title: 'PIE_CHART_3D',

};
