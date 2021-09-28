import { useEffect, useRef, useState } from 'react';
import MediaMatch from '../MediaMatch/MediaMatch';
import * as S from './NavLinks.styles';

export type NavLinksProps = {
  children: React.ReactNode;
  names: string[];
  paddingXLine: number;
};

export const NavLinks = ({ children, names, paddingXLine }: NavLinksProps) => {
  const [state, setState] = useState('Home');
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updatePosition = () =>
      setDimensions({
        width: link.current!.getBoundingClientRect().width + paddingXLine * 2,
        left: link.current!.getBoundingClientRect().left - paddingXLine
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
          {names.slice(0, names.length / 2).map((item) => (
            <S.List key={item}>
              <S.Link
                aria-selected={state === item}
                active={state === item}
                onClick={() => setState(item)}
                href="#"
                ref={state === item ? link : null}
              >
                {item}
              </S.Link>
            </S.List>
          ))}
        </S.WrapperUl>
      </MediaMatch>

      {children}

      <MediaMatch greaterThan="medium">
        <S.WrapperUl>
          {names.slice(names.length / 2, names.length).map((item) => (
            <S.List key={item}>
              <S.Link
                aria-selected={state === item}
                active={state === item}
                onClick={() => setState(item)}
                href="#"
                ref={state === item ? link : null}
              >
                {item}
              </S.Link>
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
