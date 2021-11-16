import { Heading, HeadingProps } from '~molecules/Heading/Heading';
import * as S from './Banner.styles';

export type BannerProps = {
  img: string;
} & HeadingProps;

export const Banner = ({
  img,
  title,
  subtitle,
  description,
  buttonTypeOne,
  buttonTypeTwo,
  buttonLabelOne,
  buttonLabelTwo,
  buttonLinkOne,
  buttonLinkTwo
}: BannerProps) => {
  return (
    <S.Banner src={img}>
      <Heading
        title={title}
        subtitle={subtitle}
        description={description}
        buttonTypeOne={buttonTypeOne}
        buttonTypeTwo={buttonTypeTwo}
        buttonLabelOne={buttonLabelOne}
        buttonLabelTwo={buttonLabelTwo}
        buttonLinkOne={buttonLinkOne}
        buttonLinkTwo={buttonLinkTwo}
        size="large"
      />
    </S.Banner>
  );
};
