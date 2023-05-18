import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { CITY_LIST } from '@ptg-angular-app/mock/mocks';
import { SelectModule } from '../select.module'

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
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};


export const Id = Template.bind({});
Id.args = {
  id: '',
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};


export const Placeholder = Template.bind({});
Placeholder.args = {
  id: '',
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};


export const BindLabel = Template.bind({});
BindLabel.args = {
  id: '',
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};


export const IsMultiple = Template.bind({});
IsMultiple.args = {
  id: '',
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};


export const CloseOnSelect = Template.bind({});
CloseOnSelect.args = {
  id: '',
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};


export const ItemCount = Template.bind({});
ItemCount.args = {
  id: '',
  // fieldname: '',
  placeholder: '',
  bindLabel: '',
  // bindValue: '',
  isMultiple: true,
  closeOnSelect: true,
  // accessKey: '',
  itemCount: 3,
  items: CITY_LIST
};
