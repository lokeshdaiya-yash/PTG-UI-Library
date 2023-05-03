import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dLineChartComponent } from './high-3d-line-chart.component';

export default {
  title: 'Component/High3dLineChartComponent',
  component: High3dLineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<High3dLineChartComponent>;

const Template: Story<High3dLineChartComponent> = (
  args: High3dLineChartComponent
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
  chartId: 'chart-line-3d',
};
