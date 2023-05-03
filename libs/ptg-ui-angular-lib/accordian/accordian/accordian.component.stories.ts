import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AccordianComponent } from './accordian.component';

export default {
  title: 'Component/AccordianComponent',
  component: AccordianComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
};
