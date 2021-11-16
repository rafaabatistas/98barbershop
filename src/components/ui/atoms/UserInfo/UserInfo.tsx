import * as S from './UserInfo.styles';

export type UserInfoProps = {
  name: string;
  surname: string;
};

export const UserInfo = ({ name, surname }: UserInfoProps) => (
  <S.Wrapper>
    <S.Name aria-label="User name">{`-${name} ${surname}`}</S.Name>
  </S.Wrapper>
);
