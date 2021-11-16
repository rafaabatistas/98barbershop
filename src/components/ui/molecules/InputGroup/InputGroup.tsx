import * as S from './InputGroup.styles';

export type InputGroupProps = {
  label: string;
  labelFor: string;
  required?: boolean;
  type: 'number' | 'text' | 'email' | 'password';
  value?: string;
  marginBottom?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent) => void;
};

export const InputGroup = ({
  label,
  labelFor,
  required = false,
  type,
  value,
  placeholder,
  onChange,
  marginBottom = false
}: InputGroupProps) => (
  <S.Wrapper marginBottom={marginBottom}>
    <S.Input
      placeholder={placeholder}
      name={labelFor}
      id={labelFor}
      value={value}
      required={required}
      type={type}
      onChange={(e) => onChange(e)}
    />
    <S.Label htmlFor={labelFor}>
      {label} {!required && <span data-testid="label-span">(opicional)</span>}
    </S.Label>
  </S.Wrapper>
);
