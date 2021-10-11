import * as S from './Subtitle.styles';

import { TitleProps } from '~atoms/Title/Title';
import { HeadingProps } from '../../molecules/Heading/Heading';

export type SubtitleProps = TitleProps & Pick<HeadingProps, 'lineBottom'>;

export const Subtitle = ({ children, size = 'normal', lineBottom = false, textAlign = 'center' }: SubtitleProps) => (
  <S.WrapperSubtitle size={size} lineBottom={lineBottom}>
    <S.Subtitle size={size} textAlign={textAlign}>
      {children}
      {lineBottom && <S.LineTitle aria-label="LineTitle" />}
    </S.Subtitle>
  </S.WrapperSubtitle>
);
