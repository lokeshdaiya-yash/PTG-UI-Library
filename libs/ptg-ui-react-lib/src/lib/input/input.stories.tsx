
import type { Meta, StoryObj } from '@storybook/react';
import { PtgUiInput } from './input';


const meta: Meta<typeof PtgUiInput> = {
  title: 'Component/Input',
  component: PtgUiInput,
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
   }
 };


export default meta;
type Story = StoryObj<typeof PtgUiInput>;


export const Primary: Story = {
  args: {
    value:"",
    required: false,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};

export const Value: Story = {
  args: {
    value:"",
    required: false,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};

export const Required: Story = {
  args: {
    value:"",
    required: true,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};

export const Placeholder: Story = {
  args: {
    value:"",
    required: false,
    placeholder:"Type any text",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};

export const InputSize: Story = {
  args: {
    value:" ",
    required: false,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};

export const Disabled: Story = {
  args: {
    value:"",
    required: false,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled: true,
    id:'inputId',
    name: 'inputName',
  },
};

export const Id: Story = {
  args: {
    value:"",
    required: false,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};

export const Name: Story = {
  args: {
    value:' ',
    required: false,
    placeholder:"",
    inputsize : 'lg',
    type : 'text',
    disabled:false,
    id:'inputId',
    name: 'inputName',
  },
};
