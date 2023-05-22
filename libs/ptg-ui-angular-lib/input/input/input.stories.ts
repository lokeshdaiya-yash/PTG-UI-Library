import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Component/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<InputComponent>;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});




export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: '',
  // bindValue: '',
  className: '',
  type: 'text',
  id: '',
  value: '',
  // accessKey: '',
  // aria_placeholder: '',
};

export const Class = Template.bind({});
Class.args = {
  placeholder: '',
  // bindValue: '',
  className: '',
  type: 'text',
  id: '',
  value: '',
  // accessKey: '',
  // aria_placeholder: '',
};

export const Type = Template.bind({});
Type.args = {
  placeholder: '',
  // bindValue: '',
  className: '',
  type: 'text',
  id: '',
  value: '',
  // accessKey: '',
  // aria_placeholder: '',
};

export const Id = Template.bind({});
Id.args = {
  placeholder: '',
  // bindValue: '',
  className: '',
  type: 'text',
  id: '',
  value: '',
  // accessKey: '',
  // aria_placeholder: '',
};

export const Value = Template.bind({});
Value.args = {
  placeholder: '',
  // bindValue: '',
  className: '',
  type: 'text',
  id: '',
  value: '',
  // accessKey: '',
  // aria_placeholder: '',
};

// export const AccessKey = Template.bind({});
// AccessKey.args = {
//   placeholder: '',
//   bindValue: '',
//   className: '',
//   type: 'text',
//   id: '',
//   value: '',
//   accessKey: '',
//   aria_placeholder: '',
// };



