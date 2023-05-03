import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PieChartComponent } from './pie-chart.component';

export default {
  title: 'Component/PieChartComponent',
  component: PieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
  colorsArray: [
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#242582',
  ],
};
