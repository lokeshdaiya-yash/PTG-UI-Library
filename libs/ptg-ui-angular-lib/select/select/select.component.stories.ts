import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';

import { SelectModule } from '../select.module'
export const CITY_LIST = [
  {
    id: '1',
    name: 'indore',
  },
  {
    id: '2',
    name: 'bhopal',
  },
  {
    id: '3',
    name: 'neemuch',
  },
  {
    id: '4',
    name: 'pune',
  },
  {
    id: '5',
    name: 'bangalore',
  },
  {
    id: '6',
    name: 'nagpur',
  },
  {
    id: '7',
    name: 'delhi',
  },
  {
    id: '8',
    name: 'hyderabad',
  },
  {
    id: '9',
    name: 'ahmedabad',
  },
  {
    id: '10',
    name: 'kanpur',
  },
  {
    id: '11',
    name: 'agra',
  },
  {
    id: '12',
    name: 'nashik',
  }
];
export default {
  title: 'Component/SelectComponent',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [SelectModule],
    }),
  ],
} as Meta<SelectComponent>;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  id: '',
  fieldname: '',
  placeholder: '',
  bindLabel: '',
  bindValue: '',
  isMultiple: false,
  closeOnSelect: false,
  accessKey: '',
  itemCount: 3,
  items:CITY_LIST
};
