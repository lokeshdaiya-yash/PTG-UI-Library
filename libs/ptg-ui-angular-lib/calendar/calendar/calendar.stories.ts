import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from '../calendar.module'; 


export default {
  title: 'Component/CalendarComponent',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [CalendarModule],
    }),
  ],
} as Meta<CalendarComponent>;

const Template: Story<CalendarComponent> = (args: CalendarComponent) => ({
  props: args,
});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "MM-DD-YYYY",
  className: '',
  id: '',
  disabled: false,
  // accessKey: '',
  // aria_placeholder: 'MM-DD-YYYY', 
  // aria_label: 'given-name',
};


export const ClassName = Template.bind({});
ClassName.args = {
  placeholder: "MM-DD-YYYY",
  className: '',
  id: '',
  disabled: false,
};


export const Id = Template.bind({});
Id.args = {
  placeholder: "MM-DD-YYYY",
  className: '',
  id: '',
  disabled: false,
};


export const IsDisabled = Template.bind({});
IsDisabled.args = {
  placeholder: "MM-DD-YYYY",
  className: '',
  id: '',
  disabled: true,
};
