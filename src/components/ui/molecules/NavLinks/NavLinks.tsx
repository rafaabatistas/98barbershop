import { useEffect, useRef, useState } from 'react';
import MediaMatch from '../MediaMatch/MediaMatch';
import * as S from './NavLinks.styles';

export type NavLinkNames = {
  nav: string;
  link: string;
};

export type NavLinksProps = {
  children: React.ReactNode;
  names: NavLinkNames[];
  paddingXLine: number;
};

export const NavLinks = ({ children, names, paddingXLine }: NavLinksProps) => {
  const [state, setState] = useState('home');
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  const refLink = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const updatePosition = () =>
      setDimensions({
        width: refLink.current!.getBoundingClientRect().width + paddingXLine * 2,
        left: refLink.current!.getBoundingClientRect().left - paddingXLine
      });

    updatePosition();

    window.addEventListener('load', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, [state, paddingXLine]);

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <S.WrapperUl>
          {names.slice(0, names.length / 2).map(({ nav, link }) => (
            <S.List key={link} isActive={state === link} ref={state === link ? refLink : null}>
              <S.NavLink to={link} aria-selected={state === link} onSetActive={setState} onClick={() => setState(link)}>
                {nav}
              </S.NavLink>
            </S.List>
          ))}
        </S.WrapperUl>
      </MediaMatch>

      {children}

      <MediaMatch greaterThan="medium">
        <S.WrapperUl>
          {names.slice(names.length / 2, names.length).map(({ nav, link }) => (
            <S.List key={link} isActive={state === link} ref={state === link ? refLink : null}>
              <S.NavLink to={link} aria-selected={state === link} onSetActive={setState} onClick={() => setState(link)}>
                {nav}
              </S.NavLink>
            </S.List>
          ))}
        </S.WrapperUl>

        <S.Line
          style={{ width: `${dimensions.width}px`, transform: `translateX(${dimensions.left}px)` }}
          aria-label="Line"
        />
      </MediaMatch>
    </S.Wrapper>
  );
};
