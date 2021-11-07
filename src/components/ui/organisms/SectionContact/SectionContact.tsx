import * as S from './SectionContact.styles';

import { ChangeEvent, useState } from 'react';

import { Heading } from '~molecules/Heading/Heading';
import { InputGroup } from '~molecules/InputGroup/InputGroup';
import { InputRadioGroup } from '~molecules/InputRadioGroup/InputRadioGroup';
import { TextAreaGroup } from '~molecules/TextAreaGroup/TextAreaGroup';
import { SelectGroup } from '~molecules/SelectGroup/SelectGroup';
import { Button } from '~atoms/Button/Button';

type formInputsProps = {
  nome: string;
  sobrenome: string;
  email: string;
  feedback: string;
  atendido_por: 'unavailable' | 'cleber_mariano' | 'luan_silva' | 'fabricio_marques';
  nota: '1' | '2' | '3' | '4' | '5';
  recomendaria?: boolean;
};

export const SectionContact = () => {
  const [formInputs, setFormInputs] = useState<formInputsProps>({
    nome: '',
    sobrenome: '',
    email: '',
    feedback: '',
    atendido_por: 'unavailable',
    nota: '1',
    recomendaria: true
  });

  const photoContributors = {
    unavailable: 'foto_indisponivel.jpg',
    cleber_mariano: 'contributors-1.jpg',
    luan_silva: 'contributors-2.jpg',
    fabricio_marques: 'contributors-3.jpg'
  };

  const calcMaxLength = (numberCaracteres: number) => {
    return numberCaracteres - formInputs.feedback.length;
  };

  const limitValueFeedback = (e: ChangeEvent<Element>) => {
    const { value } = e.target as HTMLInputElement;
    const maxLength = 225;

    if (value.length <= maxLength) {
      setFormInputs({ ...formInputs, feedback: value });
    }
  };

  const handleInputChange = (e: ChangeEvent<Element>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleInputClick = (e: React.MouseEvent<Element>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setFormInputs({
        nome: '',
        sobrenome: '',
        email: '',
        feedback: '',
        atendido_por: 'unavailable',
        nota: '1',
        recomendaria: undefined
      });
    }, 1000);
  };

  return (
    <S.Wrapper role="form" onSubmit={(e) => onSubmit(e)}>
      <Heading title="FeedBack" subtitle="Sua Avaliação" lineBottom />
      <S.BoxContact>
        <S.BoxInputs>
          <InputGroup
            label="Nome"
            labelFor="nome"
            required
            type="text"
            placeholder="Ex: Rafael"
            value={formInputs.nome}
            onChange={(e) => handleInputChange(e)}
            marginBottom
          />
          <InputGroup
            required
            type="text"
            marginBottom
            label="Sobrenome"
            labelFor="sobrenome"
            placeholder="Ex: Batista"
            value={formInputs.sobrenome}
            onChange={(e) => handleInputChange(e)}
          />
        </S.BoxInputs>
        <S.BoxInputs>
          <InputGroup
            label="E-mail"
            labelFor="email"
            required
            type="email"
            value={formInputs.email}
            placeholder="Ex: exemplo@gmail.com"
            marginBottom
            onChange={(e) => handleInputChange(e)}
          />
          <SelectGroup
            required
            marginBottom
            labelFor="recomendaria"
            label="Recomendaria este serviço?"
            onChange={(e) => handleInputChange(e)}
            placeholder="Nenhuma resposta selecionanda"
            selected={formInputs.recomendaria === undefined}
          >
            <option role="option" value="true">
              Sim
            </option>
            <option role="option" value="false">
              Não
            </option>
          </SelectGroup>
        </S.BoxInputs>
        <S.BoxInputs>
          <TextAreaGroup
            required
            maxLength={225}
            labelFor="feedback"
            label="Escreva sua opinião"
            value={formInputs.feedback}
            calcMaxLength={calcMaxLength(225)}
            placeholder="Comente sobre sua experiência com nosso serviço"
            onChange={(e) => limitValueFeedback(e)}
          />
          <S.BoxAttendance>
            <SelectGroup
              required
              marginBottom
              value="unavailable"
              label="Atendido por"
              labelFor="atendido_por"
              onChange={(e) => handleInputChange(e)}
              placeholder="Nenhuma resposta selecionanda"
              selected={formInputs.atendido_por === 'unavailable'}
            >
              <option role="option" value="cleber_mariano">
                Cleber Mariano
              </option>
              <option role="option" value="luan_silva">
                Luan Silva
              </option>
              <option role="option" value="fabricio_marques">
                Fabrício Marques
              </option>
            </SelectGroup>
            <S.BoxClerk data-testid="photo-clerk" src={photoContributors[formInputs.atendido_por]} />
            <InputRadioGroup labelFor="nota" value={formInputs.nota} onClick={handleInputClick} />
          </S.BoxAttendance>
        </S.BoxInputs>
      </S.BoxContact>
      <S.BoxButton>
        <Button as="button" type="submit">
          Avaliar
        </Button>
      </S.BoxButton>
    </S.Wrapper>
  );
};
