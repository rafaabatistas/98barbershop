import * as S from './Description.styles';

export type DescriptionProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'xmedium';
  marginBottom?: boolean;
};

export const Description = ({ children, size = 'small', marginBottom = false }: DescriptionProps) => (
  <S.Description size={size} marginBottom={marginBottom} data-testid="description">
    {children}
  </S.Description>
);
