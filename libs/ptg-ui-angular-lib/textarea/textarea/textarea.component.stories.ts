import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

export default {
  title: 'Component/TextareaComponent',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TextareaComponent>;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
});

// export const Primary = Template.bind({});
// Primary.args = {
//   placeholder: '',
//   bindValue: '',
//   className: '',
//   type: 'text',
//   id: '',
//   value: '',
//   accessKey: '',
//   aria_placeholder: '',
// };
