import { Container } from '~atoms/Container/Container';
import { Title } from '~atoms/Title/Title';
import { Subtitle } from '~atoms/Subtitle/Subtitle';
import { Description } from '~atoms/Description/Description';
import { Button } from '~atoms/Button/Button';
import { ButtonScroll } from '../../atoms/ButtonScroll/ButtonScroll';

import * as S from './Heading.styles';

export type HeadingProps = {
  title: string;
  subtitle: string;
  lineBottom?: boolean;
  description?: string;
  buttonTypeOne?: 'scroll' | 'link';
  buttonTypeTwo?: 'scroll' | 'link';
  buttonLabelOne?: string;
  buttonLabelTwo?: string;
  buttonLinkOne?: string;
  buttonLinkTwo?: string;
  size?: 'normal' | 'large';
  children?: React.ReactNode;
};

export const Heading = ({
  title,
  subtitle,
  lineBottom = false,
  description,
  buttonTypeOne,
  buttonTypeTwo,
  buttonLabelOne,
  buttonLabelTwo,
  buttonLinkOne = '',
  buttonLinkTwo = '',
  size = 'normal',
  children
}: HeadingProps) => (
  <Container>
    <Title size={size}>{title}</Title>

    <Subtitle lineBottom={lineBottom} size={size}>
      {subtitle}
    </Subtitle>

    <Description marginBottom size="xsmall">
      {description}
    </Description>

    {children}

    <S.WrapperButtons hasChildren={!!children}>
      {buttonLabelOne &&
        (buttonTypeOne === 'link' ? (
          <Button>{buttonLabelOne}</Button>
        ) : (
          <ButtonScroll to={buttonLinkOne!}>{buttonLabelOne}</ButtonScroll>
        ))}

      {buttonLabelTwo &&
        (buttonTypeTwo === 'link' ? (
          <Button buttonStyle="secondary">{buttonLabelTwo}</Button>
        ) : (
          <ButtonScroll buttonStyle="secondary" to={buttonLinkTwo!}>
            {buttonLabelTwo}
          </ButtonScroll>
        ))}
    </S.WrapperButtons>
  </Container>
);
