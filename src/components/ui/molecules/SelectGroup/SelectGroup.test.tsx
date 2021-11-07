import { screen } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { SelectGroup } from './SelectGroup';

describe('<SelectGroup />', () => {
  it('Deve renderizar o componente <SelectGroup />', () => {
    //Arrange
    const props = {
      label: 'Recomendaria este serviço?',
      labelFor: 'recomendaria',
      placeholder: 'Nenhuma resposta selecionanda',
      onChange: jest.fn()
    };
    const { container } = renderWithTheme(
      <SelectGroup {...props}>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </SelectGroup>
    );
    const select = screen.getByRole('combobox', { name: /Recomendaria este serviço/i });
    const option1 = screen.getByRole('option', { name: /Nenhuma resposta selecionanda/i });
    const option2 = screen.getByRole('option', { name: /Sim/i });
    const option3 = screen.getByRole('option', { name: /Não/i });
    //Assert
    expect(select).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
