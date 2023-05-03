import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IndeterminateCheckboxesComponent } from './indeterminate-checkboxes.component';

export default {
  title: 'Component/IndeterminateCheckboxesComponent',
  component: IndeterminateCheckboxesComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<IndeterminateCheckboxesComponent>;

const Template: Story<IndeterminateCheckboxesComponent> = (
  args: IndeterminateCheckboxesComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  checkBoxList: [],
};
