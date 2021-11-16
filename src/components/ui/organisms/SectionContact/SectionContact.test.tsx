import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~src/utils/tests/helpers';

import { SectionContact } from './SectionContact';

describe('<SectionContact />', () => {
  beforeEach(() => {
    renderWithTheme(<SectionContact />);
  });

  it('Deve renderizar o componente <SectionContact />', () => {
    //Arrange
    const formContact = screen.getByRole('form');
    const inputName = screen.getByRole('textbox', { name: 'Nome' });
    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });
    const inputLastName = screen.getByRole('textbox', { name: 'Sobrenome' });
    const selectRecommend = screen.getByRole('combobox', { name: 'Recomendaria este serviço?' });
    const textarea = screen.getByPlaceholderText(/Comente sobre sua experiência com nosso serviço/i);
    const selectClerk = screen.getByRole('combobox', { name: 'Atendido por' });
    const labelStar = screen.getAllByTestId('label-star');
    const button = screen.getByRole('button', { name: 'Avaliar' });
    //Assert
    expect(formContact).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(selectRecommend).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(selectClerk).toBeInTheDocument();
    expect(labelStar[0]).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Deve verificar quando o campo `Atendido por` for vazio no componente <SectionContact />', () => {
    //Arrange
    const selectClerk = screen.getByRole('combobox', { name: 'Atendido por' }) as HTMLInputElement;
    const photoClerk = screen.getByTestId('photo-clerk');
    //Act
    fireEvent.change(selectClerk, { target: { value: '' } });
    //Assert
    expect(photoClerk).toHaveStyle({ backgroundImage: `url('/assets/img/foto_indisponivel.jpg')` });
  });

  it('Deve verificar quando o campo `Atendido por` for selecionado no componente <SectionContact />', async () => {
    //Arrange
    const selectValueClerk = screen.getByRole('option', { name: /Cleber Mariano/i }) as HTMLOptionElement;
    const selectClerk = screen.getByRole('combobox', { name: 'Atendido por' }) as HTMLInputElement;
    const photoClerk = screen.getByTestId('photo-clerk');
    //Act
    fireEvent.click(selectValueClerk);
    fireEvent.change(selectClerk, { target: { value: 'cleber_mariano' } });
    //Assert
    expect(selectValueClerk.selected).toBe(true);
    expect(selectClerk.value).toBe('cleber_mariano');
    expect(photoClerk).toHaveStyle({ backgroundImage: `url('/assets/img/contributors-1.jpg')` });
  });

  it('Deve verificar tamanho máximo de texto do input de feedback no componente <SectionContact />', () => {
    //Arrange
    const calcMaxLength = screen.getByTestId('calcMaxLength');
    const textarea = screen.getByRole('textbox', { name: /Escreva sua opinião/i }) as HTMLTextAreaElement;
    //Act
    fireEvent.change(textarea, {
      target: {
        value:
          'Ótimo atendimento apresentado pelos funcionários. Profissionais capacitados, sempre de bom humor apresentando um atendimento com carisma e descontração! Ambiente limpo e confortável, melhor barbearia da região, recomendo! Um máximo!!!'
      }
    });
    //Assert
    expect(calcMaxLength).toHaveTextContent('max: 225');
    expect(textarea.value).toBe('');
  });

  it('Deve verificar todas as entradas dos inputs no componente <SectionContact />', () => {
    //Arrange
    const inputName = screen.getByRole('textbox', { name: 'Nome' }) as HTMLInputElement;
    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' }) as HTMLInputElement;
    const inputLastName = screen.getByRole('textbox', { name: 'Sobrenome' }) as HTMLInputElement;
    const selectClerk = screen.getByRole('combobox', { name: 'Atendido por' }) as HTMLInputElement;
    const selectRecommend = screen.getByRole('combobox', { name: 'Recomendaria este serviço?' }) as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    const textarea = screen.getByRole('textbox', { name: 'Escreva sua opinião' }) as HTMLTextAreaElement;
    //Act
    fireEvent.change(inputName, { target: { value: 'Rafael' } });
    fireEvent.change(inputLastName, { target: { value: 'Batista' } });
    fireEvent.change(inputEmail, { target: { value: 'rafaabatistas@gmail.com' } });
    fireEvent.change(textarea, { target: { value: 'Teste' } });
    fireEvent.change(selectRecommend, { target: { value: 'true' } });
    fireEvent.change(selectClerk, { target: { value: 'cleber_mariano' } });
    fireEvent.click(labelStar[4]);
    //Assert
    expect(inputName.value).toBe('Rafael');
    expect(inputEmail.value).toBe('rafaabatistas@gmail.com');
    expect(inputLastName.value).toBe('Batista');
    expect(textarea.value).toBe('Teste');
    expect(selectRecommend.value).toBe('true');
    expect(selectClerk.value).toBe('cleber_mariano');
  });

  it('Deve obrigar o preenchimento de todas as entradas dos inputs no componente <SectionContact />', () => {
    //Arrange
    const inputName = screen.getByRole('textbox', { name: 'Nome' }) as HTMLInputElement;
    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' }) as HTMLInputElement;
    const inputLastName = screen.getByRole('textbox', { name: 'Sobrenome' }) as HTMLInputElement;
    const selectClerk = screen.getByRole('combobox', { name: 'Atendido por' }) as HTMLInputElement;
    const selectRecommend = screen.getByRole('combobox', { name: 'Recomendaria este serviço?' }) as HTMLInputElement;
    const textarea = screen.getByPlaceholderText(
      /Comente sobre sua experiência com nosso serviço/i
    ) as HTMLTextAreaElement;
    const button = screen.getByRole('button', { name: 'Avaliar' });
    //Act
    fireEvent.click(button);
    //Assert
    expect(inputName).toBeRequired();
    expect(inputEmail).toBeRequired();
    expect(inputLastName).toBeRequired();
    expect(textarea).toBeRequired();
    expect(selectRecommend).toBeRequired();
    expect(selectClerk).toBeRequired();
  });

  it('Deve fazer o envio de todos valores dos inputs no componente <SectionContact />', async () => {
    //Arrange
    const inputName = screen.getByRole('textbox', { name: 'Nome' }) as HTMLInputElement;
    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' }) as HTMLInputElement;
    const inputLastName = screen.getByRole('textbox', { name: 'Sobrenome' }) as HTMLInputElement;
    const selectClerk = screen.getByRole('combobox', { name: 'Atendido por' }) as HTMLInputElement;
    const selectRecommend = screen.getByRole('combobox', { name: 'Recomendaria este serviço?' }) as HTMLInputElement;
    const labelStar = screen.getAllByTestId('label-star');
    const textarea = screen.getByPlaceholderText(
      /Comente sobre sua experiência com nosso serviço/i
    ) as HTMLTextAreaElement;
    //Act
    fireEvent.change(inputName, { target: { value: 'Rafael' } });
    fireEvent.change(inputLastName, { target: { value: 'Batista' } });
    fireEvent.change(inputEmail, { target: { value: 'rafaabatistas@gmail.com' } });
    fireEvent.change(textarea, { target: { value: 'Teste' } });
    fireEvent.change(selectRecommend, { target: { value: 'true' } });
    fireEvent.change(selectClerk, { target: { value: 'cleber_mariano' } });
    fireEvent.click(labelStar[4]);
    //Assert
    expect(inputName.value).toBe('Rafael');
    expect(inputEmail.value).toBe('rafaabatistas@gmail.com');
    expect(inputLastName.value).toBe('Batista');
    expect(textarea.value).toBe('Teste');
    expect(selectRecommend.value).toBe('true');
    expect(selectClerk.value).toBe('cleber_mariano');
  });
});
