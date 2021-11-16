import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
  huge: '1441px',
  large: '1171px',
  big: '1025px',
  medium: '769px',
  small: '451px'
});

export const extraMedia = generateMedia({
  huge: '1440px',
  large: '1170px',
  big: '1024px',
  medium: '768px',
  small: '450px'
});
