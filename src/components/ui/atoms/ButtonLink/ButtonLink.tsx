import * as S from './ButtonLink.styles';

type ButtonLinkProps = {
  link: string;
  children: React.ReactNode;
};

export const ButtonLink = ({ link, children }: ButtonLinkProps) => {
  return (
    <S.Link href={link} rel="noreferrer noopener" target="_blank">
      {children}
    </S.Link>
  );
};
