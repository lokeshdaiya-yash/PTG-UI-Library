import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IndeterminateCheckboxesComponent } from './indeterminate-checkboxes.component';
import {IndeterminateCheckboxesModule} from '../indeterminate-checkboxes.module'
import { CHECKBOX_ARRAY } from '@ptg-angular-app/mock/mocks';

export default {
  title: 'Component/IndeterminateCheckboxesComponent',
  component: IndeterminateCheckboxesComponent,
  decorators: [
    moduleMetadata({
      imports: [IndeterminateCheckboxesModule],
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
  checkBoxList: CHECKBOX_ARRAY,
};
