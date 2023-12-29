import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IndeterminateCheckboxesComponent } from './indeterminate-checkboxes.component';
import { IndeterminateCheckboxesModule } from '../indeterminate-checkboxes.module';
import { TreeviewItem } from 'ngx-treeview';

const CHECKBOX_ARRAY = new TreeviewItem({
  text: 'IT',
  value: 9,
  children: [
    {
      text: 'Programming',
      value: 91,
      children: [
        {
          text: 'Frontend',
          value: 911,
          children: [
            { text: 'Angular 1', value: 9111 },
            { text: 'Angular 2', value: 9112 },
            { text: 'ReactJS', value: 9113 },
          ],
        },
        {
          text: 'Backend',
          value: 912,
          children: [
            { text: 'C#', value: 9121 },
            { text: 'Java', value: 9122 },
            { text: 'Python', value: 9123 },
          ],
        },
      ],
    },
    {
      text: 'Networking',
      value: 92,
      children: [
        { text: 'Internet', value: 921 },
        { text: 'Security', value: 922 },
      ],
    },
  ],
});
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
