import * as S from './TextAreaGroup.styles';
import { InputGroupProps } from '~molecules/InputGroup/InputGroup';

type InputProps = Pick<InputGroupProps, 'label' | 'labelFor' | 'required' | 'placeholder' | 'value'>;

export type TextAreaGroupProps = {
  onChange: (e: React.ChangeEvent) => void;
  maxLength: number;
  calcMaxLength: number;
} & InputProps;

export const TextAreaGroup = ({
  label,
  labelFor,
  value,
  required = false,
  placeholder,
  maxLength,
  calcMaxLength,
  onChange
}: TextAreaGroupProps) => (
  <S.Wrapper>
    <S.Label htmlFor={labelFor}>{label}</S.Label>
    <S.TextArea
      maxLength={maxLength}
      id={labelFor}
      name={labelFor}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
    <S.MaxLength data-testid="calcMaxLength">max: {calcMaxLength}</S.MaxLength>
  </S.Wrapper>
);
