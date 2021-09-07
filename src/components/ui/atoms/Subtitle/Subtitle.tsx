import * as S from './Subtitle.styles';

import { TitleProps } from '~atoms/Title/Title';

export const Subtitle = ({ children, size = 'normal' }: TitleProps) => <S.Subtitle size={size}>{children}</S.Subtitle>;
