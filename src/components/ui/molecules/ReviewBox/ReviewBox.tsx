import { Stars } from '~atoms/Stars/Stars';
import { UserInfo, UserInfoProps } from '~atoms/UserInfo/UserInfo';
import * as S from './ReviewBox.styles';

export type ReviewBoxProps = {
  atendidoPor: 'cleber_mariano' | 'luan_silva' | 'fabricio_marques';
  feedback: string;
  nota: 1 | 2 | 3 | 4 | 5;
} & UserInfoProps;

export const ReviewBox = ({ atendidoPor, nota, feedback, nome, sobrenome }: ReviewBoxProps) => {
  const nameAnswered = {
    cleber_mariano: 'Cleber',
    luan_silva: 'Luan',
    fabricio_marques: 'Fabrício'
  };

  return (
    <S.Wrapper>
      <S.Bookmark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 53">
        <path d="M.185 53 .06 1V0h18.815v53L9.53 41.406.185 53Z" fill="currentColor" />
      </S.Bookmark>

      <S.Answered>
        Atentido por <span>{nameAnswered[atendidoPor]}</span>
      </S.Answered>

      <Stars feedbackNote={nota} />

      <S.Comment>{`"${feedback}"`}</S.Comment>

      <UserInfo nome={nome} sobrenome={sobrenome} />
    </S.Wrapper>
  );
};
