import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LineChartComponent } from './line-chart.component';
import { ChartModule } from '../../chart.module';

const LINE_CHART_D3: any = {
  data: [
    {
      date: new Date('2022-03-01'),
      value: 130,
    },
    {
      date: new Date('2022-02-15'),
      value: 300,
    },
    {
      date: new Date('2022-02-01'),
      value: 1000,
    },
  ],
  margin: { top: 20, right: 20, bottom: 50, left: 70 },
  width: 860,
  height: 400,
};

export default {
  title: 'Component/LineChartComponent',
  component: LineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<LineChartComponent>;

const Template: Story<LineChartComponent> = (args: LineChartComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: LINE_CHART_D3.data,
  margin: LINE_CHART_D3.margin,
  width: LINE_CHART_D3.width,
  height: LINE_CHART_D3.height,
};

export const Width = Template.bind({});
Width.args = {
  data: LINE_CHART_D3.data,
  margin: LINE_CHART_D3.margin,
  width: LINE_CHART_D3.width,
  height: LINE_CHART_D3.height,
};

export const Height = Template.bind({});
Height.args = {
  data: LINE_CHART_D3.data,
  margin: LINE_CHART_D3.margin,
  width: LINE_CHART_D3.width,
  height: LINE_CHART_D3.height,
};
