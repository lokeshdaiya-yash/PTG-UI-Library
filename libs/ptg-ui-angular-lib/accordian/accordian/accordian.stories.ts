import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AccordianComponent } from './accordian.component';
import { AccordianModule } from '../accordian.module'
import { ACCORDIAN_DATA } from '../../../../assets/mock/mocks';

export default {
  title: 'Component/AccordianComponent',
  component: AccordianComponent,

  decorators: [
    moduleMetadata({
      imports: [AccordianModule],
    }),
  ],
} as Meta<AccordianComponent>;

const Template: Story<AccordianComponent> = (args: AccordianComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isAnimated: false,
  isDisabled: false,
  oneAtATime: false,
  listData : ACCORDIAN_DATA
};

export const IsAnimated = Template.bind({});
IsAnimated.args = {
  isAnimated: true,
  isDisabled: false,
  oneAtATime: false,
  listData : ACCORDIAN_DATA
};


export const IsDisabled = Template.bind({});
IsDisabled.args = {
  isAnimated: false,
  isDisabled: true,
  oneAtATime: false,
  listData : ACCORDIAN_DATA
};


export const OneAtATime = Template.bind({});
OneAtATime.args = {
  isAnimated: false,
  isDisabled: false,
  oneAtATime: true,
  listData : ACCORDIAN_DATA
};



