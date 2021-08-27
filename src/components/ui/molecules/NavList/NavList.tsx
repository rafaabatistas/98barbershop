import * as S from './NavList.styles';

import { ButtonLink } from '~atoms/ButtonLink/ButtonLink';

export const NavList = () => {
  return (
    <S.NavList>
      <S.Item>
        <S.Logotipo src="assets/img/icon-react.png" alt="Imagem escrito nextJS" />
      </S.Item>
      <S.Item>
        <ButtonLink link={'https://github.com/rafaabatistas/boilerplate-nextjs'}>GitHub</ButtonLink>
      </S.Item>
    </S.NavList>
  );
};
