import { Story, Meta } from '@storybook/react';

import { HairIcon, HairIconProps } from './HairIcon';

export default {
  title: 'atoms/HairIcon',
  component: HairIcon
} as Meta;

export const Hair: Story<HairIconProps> = (args) => <HairIcon {...args} />;

Hair.args = {
  type: 'hair'
};
