import * as S from './UserInfo.styles';

export type UserInfoProps = {
  userName: string;
};

export const UserInfo = ({ userName }: UserInfoProps) => (
  <S.Wrapper>
    <S.Name aria-label="User name">{`-${userName}`}</S.Name>
  </S.Wrapper>
);
