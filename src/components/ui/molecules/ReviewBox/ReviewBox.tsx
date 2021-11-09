import { Stars, StarProps } from '~atoms/Stars/Stars';
import { UserInfo, UserInfoProps } from '~atoms/UserInfo/UserInfo';
import * as S from './ReviewBox.styles';

export type ReviewBoxProps = {
  answered: string;
  comment: string;
} & StarProps &
  UserInfoProps;

export const ReviewBox = ({ answered, feedbackNote, comment, userName }: ReviewBoxProps) => (
  <S.Wrapper>
    <S.Bookmark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 53">
      <path d="M.185 53 .06 1V0h18.815v53L9.53 41.406.185 53Z" fill="currentColor" />
    </S.Bookmark>

    <S.Answered>
      Atentido por <span>{answered}</span>
    </S.Answered>

    <Stars feedbackNote={feedbackNote} />

    <S.Comment>{`"${comment}"`}</S.Comment>

    <UserInfo userName={userName} />
  </S.Wrapper>
);
