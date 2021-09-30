import { Story, Meta } from '@storybook/react';

import { MainServices, MainServicesProps } from './MainServices';

import services from './mock';

export default {
  title: 'organisms/MainServices',
  component: MainServices,
  args: {
    items: services
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story<MainServicesProps> = (args) => <MainServices {...args} />;

export const Mobile: Story<MainServicesProps> = (args) => <MainServices {...args} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
