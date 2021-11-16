import { HairIcon, HairIconProps } from '~atoms/HairIcon/HairIcon';

import * as S from './ServiceBox.styles';

type InfosProps = {
  title: string;
  price: string;
  description: string;
};

export type ServiceBoxProps = {
  infos: InfosProps[];
} & HairIconProps;

export const ServiceBox = ({ infos, type }: ServiceBoxProps) => (
  <S.Wrapper>
    <HairIcon type={type} />

    <S.ContentInfos>
      {infos.map(({ title, price, description }) => (
        <S.Content key={`Service - ${title}`}>
          <S.InfoPrimary>
            <S.Title>{title}</S.Title>
            <S.Price>{price}</S.Price>
          </S.InfoPrimary>

          <S.Description>{description}</S.Description>
        </S.Content>
      ))}
    </S.ContentInfos>
  </S.Wrapper>
);
