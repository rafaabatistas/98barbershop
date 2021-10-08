import * as S from './Stars.styles';

export type StarProps = {
  feedbackNote: 1 | 2 | 3 | 4 | 5;
};

export const Stars = ({ feedbackNote }: StarProps) => {
  const stars = [];

  for (let i = 1; i <= feedbackNote; i++) {
    stars.push(
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.22 184.73" aria-label="Star">
        <path
          d="m157.096 184.718-60.01-31.565-60.025 31.542 11.476-66.828-48.546-47.34 67.103-9.737L97.115-.008l29.997 60.811 67.099 9.764-48.564 47.319z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return <S.Wrapper>{stars.map((star) => star)}</S.Wrapper>;
};
