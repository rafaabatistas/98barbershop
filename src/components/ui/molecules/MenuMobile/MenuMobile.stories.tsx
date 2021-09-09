import { Story, Meta } from '@storybook/react';

import { MenuMobile, MenuMobileProps } from './MenuMobile';

export default {
  title: 'molecules/MenuMobile',
  args: {
    isOpen: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  component: MenuMobile
} as Meta;

export const Basic: Story<MenuMobileProps> = (args) => <MenuMobile {...args} />;
