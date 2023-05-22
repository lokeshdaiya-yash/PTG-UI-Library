import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LinebarChartComponent } from './linebar-chart.component';
import { BAR_CHART_3D, LINE_BAR_DATA, LINE_CHART_2D, MULTI_LINE_CHART_2D, PIE_CHART_3D, STACKED_COLUMN_DATA } from '../../../../../../assets/mock/chart';
import {ChartModule} from '../../../chart.module';


export default {
  title: 'Component/LinebarChartComponent',
  component: LinebarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<LinebarChartComponent>;

const Template: Story<LinebarChartComponent> = (
  args: LinebarChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title:LINE_BAR_DATA.title,
  subtitle:LINE_BAR_DATA.subtitle,
  remainingOptions:LINE_BAR_DATA.remainingOptions,
  categories:LINE_BAR_DATA.categories,
};

export const Title = Template.bind({});
Title.args = {
  title:LINE_BAR_DATA.title,
  subtitle:LINE_BAR_DATA.subtitle,
  remainingOptions:LINE_BAR_DATA.remainingOptions,
  categories:LINE_BAR_DATA.categories,
};


export const Subtitle = Template.bind({});
Subtitle.args = {
  title:LINE_BAR_DATA.title,
  subtitle:LINE_BAR_DATA.subtitle,
  remainingOptions:LINE_BAR_DATA.remainingOptions,
  categories:LINE_BAR_DATA.categories,
};

