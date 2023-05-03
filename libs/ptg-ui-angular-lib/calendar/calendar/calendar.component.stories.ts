import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';

export default {
  title: 'Component/CalendarComponent',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CalendarComponent>;

const Template: Story<CalendarComponent> = (args: CalendarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  placeholder: '',
  className: '',
  id: '',
  disabled: false,
  accessKey: '',
  aria_placeholder: 'MM-DD-YYYY',
  aria_label: 'given-name',
};
