import * as S from './Description.styles';

export type DescriptionProps = {
  children: React.ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'xmedium';
  color?: 'white' | 'black';
  marginBottom?: boolean;
};

export const Description = ({ children, size = 'small', marginBottom = false, color = 'white' }: DescriptionProps) => (
  <S.Description size={size} color={color} marginBottom={marginBottom} data-testid="description">
    {children}
  </S.Description>
);
