import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LoadingComponent } from './loading.component';

export default {
  title: 'Component/LoadingComponent',
  component: LoadingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<LoadingComponent>;

const Template: Story<LoadingComponent> = (args: LoadingComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};
