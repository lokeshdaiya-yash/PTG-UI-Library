import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dBarChartComponent } from './high-3d-bar-chart.component';
import {ChartModule} from '../../../chart.module';


export const BAR_CHART_3D = {
  data: [
    {
      name: 'Year 1800',
      data: [107, 120, 635, 203, 300, 203, 300]
    }
  ],
  categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Canada', 'Uk']
}

// Mock data for 2d line chart

export default {
  title: 'Component/High3dBarChartComponent',
  component: High3dBarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
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
  data: BAR_CHART_3D.data,
  categories:BAR_CHART_3D.categories,
  remainingOptions: {},
  title: 'BAR_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
};

export const Title = Template.bind({});
Title.args = {
  data: BAR_CHART_3D.data,
  categories:BAR_CHART_3D.categories,
  remainingOptions: {},
  title: 'BAR_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
};

export const xTitle = Template.bind({});
xTitle.args = {
  data: BAR_CHART_3D.data,
  categories:BAR_CHART_3D.categories,
  remainingOptions: {},
  title: 'BAR_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
};

export const yTitle = Template.bind({});
yTitle.args = {
  data: BAR_CHART_3D.data,
  categories:BAR_CHART_3D.categories,
  remainingOptions: {},
  title: 'BAR_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
};