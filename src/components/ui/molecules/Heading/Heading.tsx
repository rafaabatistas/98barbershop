import Fade from 'react-reveal/Fade';

import { Container } from '~atoms/Container/Container';
import { Title } from '~atoms/Title/Title';
import { Subtitle } from '~atoms/Subtitle/Subtitle';
import { Description } from '~atoms/Description/Description';
import { Button } from '~atoms/Button/Button';

import * as S from './Heading.styles';

export type HeadingProps = {
  title: string;
  subtitle: string;
  lineBottom?: boolean;
  description?: string;
  buttons?: 1 | 2;
  buttonLabelOne?: string;
  buttonLabelTwo?: string;
  children?: React.ReactNode;
};

export const Heading = ({
  title,
  subtitle,
  lineBottom = false,
  description,
  buttons,
  buttonLabelOne,
  buttonLabelTwo,
  children
}: HeadingProps) => (
  <Container>
    <Fade delay={300} bottom>
      <Title size="large">{title}</Title>
    </Fade>

    <Fade delay={400} bottom>
      <Subtitle lineBottom={lineBottom} size="large">
        {subtitle}
      </Subtitle>
    </Fade>

    <Fade delay={500} bottom>
      <Description marginBottom size="xsmall">
        {description}
      </Description>
    </Fade>

    {children}

    <S.WrapperButtons hasChildren={!!children}>
      {!!buttons &&
        (buttons == 1 ? (
          <Fade delay={600} left>
            <Button>{buttonLabelOne}</Button>
          </Fade>
        ) : (
          <>
            <Fade delay={600} left>
              <Button>{buttonLabelOne}</Button>
            </Fade>

            <Fade delay={600} right>
              <Button buttonStyle="secondary">{buttonLabelTwo}</Button>
            </Fade>
          </>
        ))}
    </S.WrapperButtons>
  </Container>
);
