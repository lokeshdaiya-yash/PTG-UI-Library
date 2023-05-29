import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BarChartComponent } from './bar-chart.component';
import { ChartModule } from '../../chart.module';

const BAR_CHART_D3: any = {
  height: 330,
  width: 550,
  title: 'My Charts',
  source: 'Trending languages',
  x_title: 'Languages',
  y_title: 'Numbers',
  margin: 50,
  start: 0,
  end: 160000,
  data: [
    { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
    { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
    { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
    {
      Framework: 'Backbone',
      Stars: '67647',
      Released: '2010',
      color: 'orange',
    },
    { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
  ],
};

export default {
  title: 'Component/BarChartComponent',
  component: BarChartComponent,

  // parameters: {
  //   layout: 'centered',
  // },

  argTypes: {
    width: {
      control: { type: 'range', min: 200, max: 1200 },
    },
    height: {
      control: { type: 'range', min: 200, max: 1200 },
    },
  },

  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<BarChartComponent>;

const Template: Story<BarChartComponent> = (args: BarChartComponent) => ({
  props: args,
  component: BarChartComponent,
});

export const Primary = Template.bind({});
Primary.args = {
  data: BAR_CHART_D3.data,
  width: 550,
  height: 330,
  margin: 50,
  start: 0,
  end: 160000,
};

export const Width = Template.bind({});
Width.args = {
  data: BAR_CHART_D3.data,
  width: 550,
  height: 330,
  margin: 50,
  start: 0,
  end: 160000,
};

export const Height = Template.bind({});
Height.args = {
  data: BAR_CHART_D3.data,
  width: 550,
  height: 330,
  margin: 50,
  start: 0,
  end: 160000,
};

export const Margin = Template.bind({});
Margin.args = {
  data: BAR_CHART_D3.data,
  width: 550,
  height: 330,
  margin: 50,
  start: 0,
  end: 160000,
};

export const Start = Template.bind({});
Start.args = {
  data: BAR_CHART_D3.data,
  width: 550,
  height: 330,
  margin: 50,
  start: 0,
  end: 160000,
};

export const End = Template.bind({});
End.args = {
  data: BAR_CHART_D3.data,
  width: 550,
  height: 330,
  margin: 50,
  start: 0,
  end: 160000,
};
