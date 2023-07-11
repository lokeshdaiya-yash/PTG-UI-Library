import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StackedColumnChartComponent } from './stacked-column-chart.component';
import { ChartModule } from '../../../chart.module';

const STACKED_COLUMN_DATA: any = {
  title: 'Stacked Column',
  categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
  remainingOptions: {
    series: [
      {
        name: 'John',
        data: [5, 3, 4, 7, 2],
      },
      {
        name: 'Jane',
        data: [2, 2, 3, 2, 1],
      },
      {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
      },
    ],
  },
};

export default {
  title: 'Component/StackedColumnChartComponent',
  component: StackedColumnChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<StackedColumnChartComponent>;

const Template: Story<StackedColumnChartComponent> = (
  args: StackedColumnChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
  title: STACKED_COLUMN_DATA.title,
  categories: STACKED_COLUMN_DATA.categories,
  yTitle: 'Values',
};

export const Title = Template.bind({});
Title.args = {
  remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
  title: STACKED_COLUMN_DATA.title,
  categories: STACKED_COLUMN_DATA.categories,
  yTitle: 'Values',
};

export const Yaxistitle = Template.bind({});
Yaxistitle.args = {
  remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
  title: STACKED_COLUMN_DATA.title,
  categories: STACKED_COLUMN_DATA.categories,
  yTitle: 'Values',
};
