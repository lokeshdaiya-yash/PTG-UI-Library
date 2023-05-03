import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dBarChartComponent } from './high-3d-bar-chart.component';

export default {
  title: 'Component/High3dBarChartComponent',
  component: High3dBarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<High3dBarChartComponent>;

const Template: Story<High3dBarChartComponent> = (
  args: High3dBarChartComponent
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
};
