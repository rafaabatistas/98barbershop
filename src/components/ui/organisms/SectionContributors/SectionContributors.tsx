import * as S from './SectionContributors.styles';

import { Heading } from '~molecules/Heading/Heading';

export type Contributors = {
  src: string;
  name: string;
  occupation: string;
};

export type SectionContributorsProps = {
  contributors: Contributors[];
};

export const SectionContributors = ({ contributors }: SectionContributorsProps) => (
  <S.Wrapper>
    <Heading title="Os Melhores" subtitle="Nossos Profissionais" lineBottom />
    <S.ContainerContributors>
      {contributors?.map(({ src, name, occupation }, index) => (
        <S.BoxContributors key={`key-${name}-${index}`}>
          <S.Image src={src} />
          <S.Name>{name}</S.Name>
          <S.Occupation>{occupation}</S.Occupation>
        </S.BoxContributors>
      ))}
    </S.ContainerContributors>
  </S.Wrapper>
);
