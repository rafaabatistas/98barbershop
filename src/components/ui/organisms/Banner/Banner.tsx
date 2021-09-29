import { Heading, HeadingProps } from '~molecules/Heading/Heading';
import * as S from './Banner.styles';

export type BannerProps = {
  img: string;
} & HeadingProps;

export const Banner = ({ img, title, subtitle, description, buttons, buttonLabelOne, buttonLabelTwo }: BannerProps) => {
  return (
    <S.Banner src={img}>
      <Heading
        title={title}
        subtitle={subtitle}
        description={description}
        buttons={buttons}
        buttonLabelOne={buttonLabelOne}
        buttonLabelTwo={buttonLabelTwo}
      />
    </S.Banner>
  );
};
