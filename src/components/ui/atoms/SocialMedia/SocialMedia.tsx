import * as S from './SocialMedia.styles';

export type SocialMediaProps = {
  link: string;
  image: string;
  alt: string;
  marginRight?: boolean;
};

export const SocialMedia = ({ link, image, alt, marginRight = false }: SocialMediaProps) => (
  <S.SocialMedia marginRight={marginRight}>
    <S.WraperImage href={link} rel="noreferrer noopener" target="_blank">
      <S.Image src={image} alt={alt} />
    </S.WraperImage>
  </S.SocialMedia>
);
