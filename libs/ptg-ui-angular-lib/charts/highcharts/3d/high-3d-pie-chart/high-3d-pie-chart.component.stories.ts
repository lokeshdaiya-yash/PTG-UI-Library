import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dPieChartComponent } from './high-3d-pie-chart.component';

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
  data: [],
  remainingOptions: {},
  title: null,
  xTitle: null,
  yTitle: null,
  seriesName: '',
};
