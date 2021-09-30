import * as S from './HairIcon.styles';

export type HairIconProps = {
  type: 'hair' | 'baber' | 'full';
};

export const HairIcon = ({ type }: HairIconProps) => (
  <S.Wrapper>
    <S.Hair type={type} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 152" role="img">
      <path
        fill="currentColor"
        aria-label="Hair"
        d="m92 50.08-3.975-13.618 3.091 3.076s0-5.711-6.183-10.983a5.28 5.28 0 0 1 2.65.878s-8.832-13.618-24.731-12.74c0 0-1.766-13.618-18.99-16.693l4.858 4.832-18.548-.878s5.299.878 5.299 3.514c-2.208-1.318-12.366-.878-18.99 2.197l7.95 1.318-17.666 9.664 3.092-.439L.582 36.023l2.209-2.196S-.742 48.763.14 61.064c.52 7.23 2.367 18.732 3.533 30.751.667 0 1.545.04 2.208 0-.296-2.561-1.056-8.883-1.325-13.18-.442-7.028 3.091-10.103 3.975-15.375.883-5.272-.442-10.543 1.766-14.497 2.208-3.954 16.782 3.954 26.056 3.954 9.275 0 19.874-4.833 22.965-6.59 0 0 16.34 7.03 16.34 8.786 0 0-4.858 7.469 2.208 12.74 5.742 4.275 5.203 21.18 4.858 26.798.517.022.813.022 1.325 0 .389-9.964 1.325-21.28 2.208-25.04 0 0 .883 2.196 1.767 2.196.883 0 .441-2.197.441-4.393 0-2.197.11-6.15.11-6.15l2.099 3.514s-.884-13.619-1.325-15.815L92 50.081Z"
      />

      <path
        fill="currentColor"
        aria-label="Baber"
        d="m82.726 94.45-7.508 22.406-31.356 15.815-31.355-16.255-6.625-24.6c-.794.06-1.408 0-2.208 0 .588 7.38 1.188 17.896.884 27.236 0 9.665 11.04 17.133 16.782 21.526C27.08 144.971 35.03 152 44.745 152c10.157 0 20.756-10.983 25.173-13.618 4.416-2.636 13.248-10.544 13.69-20.648.186-4.274.155-14.936.442-23.283h-1.325Z"
      />
    </S.Hair>
  </S.Wrapper>
);
