import * as S from './InputRadio.styles';

export type InputRadioProps = {
  labelFor: string;
  value: '1' | '2' | '3' | '4' | '5';
  color?: 'primary' | 'starOff';
  dataTestid?: string;
  required?: boolean;
  isChecked: string;
  onClick: (event: React.MouseEvent) => void;
};

export const InputRadio = ({
  labelFor,
  value,
  isChecked,
  required = false,
  color = 'primary',
  dataTestid,
  onClick
}: InputRadioProps) => (
  <S.Wrapper>
    <S.InputRadio
      data-testid={dataTestid}
      id={labelFor}
      checked={isChecked === value}
      value={value}
      type="radio"
      name={labelFor}
      required={required}
      onClick={(e) => onClick(e)}
    />
    <S.Star data-testid="label-star" htmlFor={labelFor} color={color}>
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 194.22 184.73"
        aria-label="Star"
      >
        <path
          d="m157.096 184.718-60.01-31.565-60.025 31.542 11.476-66.828-48.546-47.34 67.103-9.737L97.115-.008l29.997 60.811 67.099 9.764-48.564 47.319z"
          fill="currentColor"
        />
      </svg>
    </S.Star>
  </S.Wrapper>
);
