import { Story, Meta } from '@storybook/react';

import { SelectGroup, SelectGroupProps } from './SelectGroup';

export default {
  title: 'molecules/SelectGroup',
  component: SelectGroup
} as Meta;

export const Basic: Story<SelectGroupProps> = (args) => (
  <SelectGroup {...args}>
    <option value="true">Sim</option>
    <option value="false">Não</option>
  </SelectGroup>
);

Basic.args = {
  label: 'Recomendaria este serviço?',
  labelFor: 'recomendaria',
  placeholder: 'Nenhuma resposta selecionanda'
};
