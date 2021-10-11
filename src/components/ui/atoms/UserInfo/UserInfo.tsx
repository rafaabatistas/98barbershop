import * as S from './UserInfo.styles';

export type UserInfoProps = {
  userImage: string;
  userName: string;
};

export const UserInfo = ({ userImage, userName }: UserInfoProps) => (
  <S.Wrapper>
    <S.User userImage={userImage} aria-label="User image" />
    <S.Name aria-label="User name">{`-${userName}`}</S.Name>
  </S.Wrapper>
);
