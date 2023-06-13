import type { Meta } from '@storybook/react';
import { PtgUiCalendar } from './calendar';

const Story: Meta<typeof PtgUiCalendar> = {
  component: PtgUiCalendar,
  title: 'Other/PtgUiCalendar',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {},
};
