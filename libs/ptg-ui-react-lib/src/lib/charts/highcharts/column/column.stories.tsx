import type { Meta } from '@storybook/react';
import { PtgUiColumn } from './column';

const Story: Meta<typeof PtgUiColumn> = {
  component: PtgUiColumn,
  title: 'Other/PtgUiColumn',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {},
};
