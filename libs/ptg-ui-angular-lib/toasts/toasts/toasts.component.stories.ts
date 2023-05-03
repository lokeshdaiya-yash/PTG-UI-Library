import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ToastsComponent } from './toasts.component';

export default {
  title: 'Component/ToastsComponent',
  component: ToastsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ToastsComponent>;

const Template: Story<ToastsComponent> = (args: ToastsComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
