import * as S from './InputRadioGroup.styles';

import { InputRadio, InputRadioProps } from '~atoms/InputRadio/InputRadio';

export type InputRadioGroupProps = Pick<InputRadioProps, 'value' | 'labelFor' | 'onClick'>;

export const InputRadioGroup = ({ labelFor, value, onClick }: InputRadioGroupProps) => (
  <S.Wrapper>
    <InputRadio
      dataTestid="one-star"
      value="1"
      isChecked={value}
      labelFor={labelFor}
      color="primary"
      required
      onClick={(e) => onClick(e)}
    />
    <InputRadio
      dataTestid="two-star"
      value="2"
      isChecked={value}
      labelFor={labelFor}
      color={value > '1' ? 'primary' : 'starOff'}
      onClick={(e) => onClick(e)}
    />
    <InputRadio
      dataTestid="three-star"
      value="3"
      isChecked={value}
      labelFor={labelFor}
      color={value > '2' ? 'primary' : 'starOff'}
      onClick={(e) => onClick(e)}
    />
    <InputRadio
      dataTestid="four-star"
      value="4"
      isChecked={value}
      labelFor={labelFor}
      color={value > '3' ? 'primary' : 'starOff'}
      onClick={(e) => onClick(e)}
    />
    <InputRadio
      dataTestid="five-star"
      value="5"
      isChecked={value}
      labelFor={labelFor}
      color={value > '4' ? 'primary' : 'starOff'}
      onClick={(e) => onClick(e)}
    />
  </S.Wrapper>
);
