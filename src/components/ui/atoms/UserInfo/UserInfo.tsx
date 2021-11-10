import * as S from './UserInfo.styles';

export type UserInfoProps = {
  nome: string;
  sobrenome: string;
};

export const UserInfo = ({ nome, sobrenome }: UserInfoProps) => (
  <S.Wrapper>
    <S.Name aria-label="User name">{`-${nome} ${sobrenome}`}</S.Name>
  </S.Wrapper>
);
