import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dPieChartComponent } from './high-3d-pie-chart.component';
import {ChartModule} from '../../../chart.module';
import { BAR_CHART_3D, LINE_BAR_DATA, LINE_CHART_2D, MULTI_LINE_CHART_2D, PIE_CHART_3D, STACKED_COLUMN_DATA } from '../../../../../../assets/mock/chart';


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
