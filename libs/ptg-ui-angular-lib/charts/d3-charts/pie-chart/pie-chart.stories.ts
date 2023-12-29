import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PieChartComponent } from './pie-chart.component';
import { ChartModule } from '../../chart.module';

const PIE_CHART_D3: any = {
  height: 600,
  width: 800,
  title: 'My Charts',
  source: 'Trending languages',
  x_title: 'Languages',
  y_title: 'Numbers',
  colors: ['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
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
  title: 'Component/PieChartComponent',
  component: PieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<PieChartComponent>;

const Template: Story<PieChartComponent> = (args: PieChartComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  margin: 50,
  width: 750,
  height: 600,
  data: PIE_CHART_D3.data,
  colorsArray: [
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#242582',
  ],
};

export const Margin = Template.bind({});
Margin.args = {
  margin: 50,
  width: 750,
  height: 600,
  data: PIE_CHART_D3.data,
  colorsArray: [
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#242582',
  ],
};

export const Width = Template.bind({});
Width.args = {
  margin: 50,
  width: 750,
  height: 600,
  data: PIE_CHART_D3.data,
  colorsArray: [
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#242582',
  ],
};

export const Height = Template.bind({});
Height.args = {
  margin: 50,
  width: 750,
  height: 600,
  data: PIE_CHART_D3.data,
  colorsArray: [
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#242582',
  ],
};
