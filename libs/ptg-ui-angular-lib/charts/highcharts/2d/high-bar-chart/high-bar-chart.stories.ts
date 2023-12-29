import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HighBarChartComponent } from './high-bar-chart.component';
import { ChartModule } from '../../../chart.module';

const BAR_CHART_3D = {
  data: [
    {
      name: 'Year 1800',
      data: [107, 120, 635, 203, 300, 203, 300],
    },
  ],
  categories: [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
    'Canada',
    'Uk',
  ],
};

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
