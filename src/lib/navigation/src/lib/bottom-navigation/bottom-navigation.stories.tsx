import type { Meta } from '@storybook/react';
import { BottomNavigation } from './bottom-navigation';

const Story: Meta<typeof BottomNavigation> = {
  component: BottomNavigation,
  title: 'Navigation/Bottom Navigation',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A732&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
