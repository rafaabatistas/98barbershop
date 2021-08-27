import * as S from './Main.styles';

import { Title } from '~molecules/Title/Title';

export const Main = () => {
  return (
    <S.Wrapper>
      <Title
        icon={'assets/img/icon-react.png'}
        alt={'Ícone com logotipo do nextJS e ao lado escrito Boilerplate NextJS'}
        title={'Boilerplate NextJS'}
      />
      <S.Description>Typescript, ReactJS, NextJS e Styled Components</S.Description>
      <S.Ilustration src="/assets/svg/ilustration.svg" alt="Um desenvolvedor de frente para uma tela com código" />
    </S.Wrapper>
  );
};
