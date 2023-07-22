import type { Meta } from '@storybook/react';
import { Chip } from './chip';

const Story: Meta<typeof Chip> = {
  component: Chip,
  title: 'Data Display/Chip',
};
export default Story;

export const Primary = {
  args: {},
};