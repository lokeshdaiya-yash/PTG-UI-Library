import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighBarChartComponent } from './high-bar-chart.component';

export default {
  title: 'Component/HighBarChartComponent',
  component: HighBarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
  data: [],
};
