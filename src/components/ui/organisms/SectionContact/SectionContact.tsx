import * as S from './SectionContact.styles';

import { ChangeEvent, useState, useContext } from 'react';

import { Heading } from '~molecules/Heading/Heading';
import { InputGroup } from '~molecules/InputGroup/InputGroup';
import { InputRadioGroup } from '~molecules/InputRadioGroup/InputRadioGroup';
import { TextAreaGroup } from '~molecules/TextAreaGroup/TextAreaGroup';
import { SelectGroup } from '~molecules/SelectGroup/SelectGroup';
import { Button } from '~atoms/Button/Button';
import { ModalForm } from '~molecules/ModalForm/ModalForm';

import datoClient from '~src/dato-cms/dato-client';
import { ReviewContext } from '~contexts/ReviewContext';

type StatusRequest = 'success' | 'error';

type FormInputsProps = {
  name: string;
  surname: string;
  email: string;
  feedback: string;
  answered: 'unavailable' | 'cleber_mariano' | 'luan_silva' | 'fabricio_marques';
  stars: '1' | '2' | '3' | '4' | '5';
  recommend?: 'true' | 'false';
};

export const SectionContact = () => {
  const { reviews, setReviews } = useContext(ReviewContext);
  const [statusRequest, setStatusRequest] = useState<StatusRequest>('success');
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formInputs, setFormInputs] = useState<FormInputsProps>({
    name: '',
    surname: '',
    email: '',
    feedback: '',
    answered: 'unavailable',
    stars: '1',
    recommend: 'true'
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
    try {
      e.preventDefault();
      setIsLoading(true);
      const dataInputs = { ...formInputs, nota: +formInputs.nota, itemType: '1236153' };
      const allReviews = reviews;
      allReviews.push(dataInputs);
      await datoClient.items.create(dataInputs);
      setReviews([...allReviews]);
      setStatusRequest('success');
    } catch (e) {
      setStatusRequest('error');
    } finally {
      setIsLoading(false);
      setFormInputs({
        name: '',
        surname: '',
        email: '',
        feedback: '',
        answered: 'unavailable',
        stars: '1',
        recommend: undefined
      });
      setOpenModal(true);
    }
  };

  return (
    <>
      <S.Wrapper role="form" onSubmit={(e) => onSubmit(e)}>
        <Heading title="FeedBack" subtitle="Sua Avaliação" lineBottom />
        <S.BoxContact>
          <S.BoxInputs>
            <InputGroup
              label="Nome"
              labelFor="name"
              required
              type="text"
              placeholder="Ex: Rafael"
              value={formInputs.name}
              onChange={(e) => handleInputChange(e)}
              marginBottom
            />
            <InputGroup
              required
              type="text"
              marginBottom
              label="Sobrenome"
              labelFor="surname"
              placeholder="Ex: Batista"
              value={formInputs.surname}
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
              labelFor="recommend"
              label="Recomendaria este serviço?"
              onChange={(e) => handleInputChange(e)}
              placeholder="Nenhuma resposta selecionanda"
              selected={formInputs.recommend === undefined}
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
                labelFor="answered"
                onChange={(e) => handleInputChange(e)}
                placeholder="Nenhuma resposta selecionanda"
                selected={formInputs.answered === 'unavailable'}
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
              <S.BoxClerk data-testid="photo-clerk" src={photoContributors[formInputs.answered]} />
              <InputRadioGroup labelFor="stars" value={formInputs.stars} onClick={handleInputClick} />
            </S.BoxAttendance>
          </S.BoxInputs>
        </S.BoxContact>
        <S.BoxButton>
          <Button as="button" type="submit" disabled={isLoading} style={{ width: '12rem', height: '4.4rem' }}>
            {isLoading ? (
              <S.Loading version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path
                  fill="#fff"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </path>
              </S.Loading>
            ) : (
              'Avaliar'
            )}
          </Button>
        </S.BoxButton>
      </S.Wrapper>
      <ModalForm status={statusRequest} isOpen={openModal} onClick={setOpenModal} />
    </>
  );
};
