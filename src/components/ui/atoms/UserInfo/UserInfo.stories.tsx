import { Story, Meta } from '@storybook/react';

import { UserInfo, UserInfoProps } from './UserInfo';

export default {
  title: 'atoms/UserInfo',
  component: UserInfo,
  args: {
    userImage: '/assets/img/testUser.png',
    userName: 'gabriel guedes'
  }
} as Meta;

export const Basic: Story<UserInfoProps> = (args) => <UserInfo {...args} />;
