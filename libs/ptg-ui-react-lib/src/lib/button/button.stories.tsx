// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import PtgUiButton from './button'


const meta: Meta<typeof PtgUiButton> = {
  title: 'Component/Button',
  component: PtgUiButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    active:{
      control:'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof PtgUiButton>;

export const Primary: Story = {
  args: {
      variant:'primary',
      children:'Example',
      disabled : false,
      active :false
  },
};


export const Secondary: Story = {
  args: {
      variant:'secondary',
      children:'Example',
      disabled : false,
      active :false
  },
};


export const Success: Story = {
  args: {
      variant:'success',
      children:'Example',
      disabled : false,
      active :false
  },
};

export const Children: Story = {
  args: {
      variant:'primary',
      children:'Example',
      disabled : false,
      active :false
  },
};

export const Danger: Story = {
  args: {
      variant:'danger',
      children:'Example',
      disabled : false,
      active :false
  },
};

export const Disabled: Story = {
  args: {
      variant:'primary',
      children:'Example',
      disabled : true,
      active :false
  },
};

export const Active: Story = {
  args: {
      variant:'primary',
      children:'Example',
      disabled : false,
      active :true
  },
};