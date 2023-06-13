import type { Meta } from '@storybook/react';
import { PtgUiAlert } from './alert';

const Story: Meta<typeof PtgUiAlert> = {
  component: PtgUiAlert,
  title: 'Other/PtgUiAlert',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {},
};
