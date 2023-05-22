import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StackedColumnChartComponent } from './stacked-column-chart.component';
import { BAR_CHART_3D, LINE_BAR_DATA, LINE_CHART_2D, MULTI_LINE_CHART_2D, PIE_CHART_3D, STACKED_COLUMN_DATA } from '../../../../../../assets/mock/chart';
import {ChartModule} from '../../../chart.module';


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
   remainingOptions:STACKED_COLUMN_DATA.remainingOptions,
   title:STACKED_COLUMN_DATA.title,
   categories:STACKED_COLUMN_DATA.categories,
   yTitle:'Values' 
  };


export const Title = Template.bind({});
Title.args = {
   remainingOptions:STACKED_COLUMN_DATA.remainingOptions,
   title:STACKED_COLUMN_DATA.title,
   categories:STACKED_COLUMN_DATA.categories,
   yTitle:'Values' 
  };



export const Yaxistitle = Template.bind({});
Yaxistitle.args = {
     remainingOptions:STACKED_COLUMN_DATA.remainingOptions,
     title:STACKED_COLUMN_DATA.title,
     categories:STACKED_COLUMN_DATA.categories,
     yTitle:'Values' 
    };
  

  