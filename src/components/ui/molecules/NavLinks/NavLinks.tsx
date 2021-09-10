import { useEffect, useRef, useState } from 'react';
import MediaMatch from '../MediaMatch/MediaMatch';
import * as S from './NavLinks.styles';

export type NavLinksProps = {
  children: React.ReactNode;
};

export const NavLinks = ({ children }: NavLinksProps) => {
  const [homeState, setHomeState] = useState(true);
  const [sobreState, setSobreState] = useState(false);
  const [servicosState, setServicosState] = useState(false);
  const [equipeState, setEquipeState] = useState(false);
  const [opiniaoState, setOpiniaoState] = useState(false);
  const [feedBackState, setFeedBackState] = useState(false);

  const link = useRef<HTMLAnchorElement>(null);
  const line = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setTimeout(() => {
      line.current!.style.width = `${link.current!.getBoundingClientRect().width + 20}px`;
      line.current!.style.left = `${link.current!.offsetLeft - 10}px`;
    }, 50);
  }, [homeState, sobreState, servicosState, equipeState, opiniaoState, feedBackState]);

  return (
    <>
      <S.Wrapper>
        <MediaMatch greaterThan="medium">
          <S.WrapperUl>
            <S.List>
              {homeState ? (
                <S.Link
                  active
                  onClick={() => {
                    setHomeState(true);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                  ref={link}
                >
                  Home
                </S.Link>
              ) : (
                <S.Link
                  onClick={() => {
                    setHomeState(true);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                >
                  Home
                </S.Link>
              )}
            </S.List>
            <S.List>
              {sobreState ? (
                <S.Link
                  active
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(true);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                  ref={link}
                >
                  Sobre
                </S.Link>
              ) : (
                <S.Link
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(true);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                >
                  Sobre
                </S.Link>
              )}
            </S.List>
            <S.List>
              {servicosState ? (
                <S.Link
                  active
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(true);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                  ref={link}
                >
                  Serviços
                </S.Link>
              ) : (
                <S.Link
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(true);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                >
                  Serviços
                </S.Link>
              )}
            </S.List>
          </S.WrapperUl>
        </MediaMatch>

        {children}

        <MediaMatch greaterThan="medium">
          <S.WrapperUl>
            <S.List>
              {equipeState ? (
                <S.Link
                  active
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(true);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                  ref={link}
                >
                  Equipe
                </S.Link>
              ) : (
                <S.Link
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(true);
                    setOpiniaoState(false);
                    setFeedBackState(false);
                  }}
                >
                  Equipe
                </S.Link>
              )}
            </S.List>
            <S.List>
              {opiniaoState ? (
                <S.Link
                  active
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(true);
                    setFeedBackState(false);
                  }}
                  ref={link}
                >
                  Opinião
                </S.Link>
              ) : (
                <S.Link
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(true);
                    setFeedBackState(false);
                  }}
                >
                  Opinião
                </S.Link>
              )}
            </S.List>
            <S.List>
              {feedBackState ? (
                <S.Link
                  active
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(true);
                  }}
                  ref={link}
                >
                  FeedBack
                </S.Link>
              ) : (
                <S.Link
                  onClick={() => {
                    setHomeState(false);
                    setSobreState(false);
                    setServicosState(false);
                    setEquipeState(false);
                    setOpiniaoState(false);
                    setFeedBackState(true);
                  }}
                >
                  FeedBack
                </S.Link>
              )}
            </S.List>
          </S.WrapperUl>
        </MediaMatch>
      </S.Wrapper>
      <MediaMatch greaterThan="medium">
        <S.Line aria-label="Line" ref={line} />
      </MediaMatch>
    </>
  );
};
