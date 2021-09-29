import { Story, Meta } from '@storybook/react';

import { Description, DescriptionProps } from './Description';

export default {
  title: 'atoms/Description',
  component: Description,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121212' }]
    }
  },
  args: {
    children: 'Enjoy the Ultimate Relaxed Grooming Experience For Men every time you step into the Boardroom',
    size: 'medium',
    marginBottom: true
  }
} as Meta;

export const Basic: Story<DescriptionProps> = (args) => <Description {...args} />;
