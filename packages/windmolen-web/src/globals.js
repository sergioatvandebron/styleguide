// @flow
import { injectGlobal } from 'styled-components';

/** Font */
type FontThickness = 'thin'
  | 'light'
  | 'regular'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

type FontWeight = 100 | 300 | 400 | 600 | 700 | 800 | 900;

const fontFace = (weight: FontWeight, thickness: FontThickness) => `@font-face {
  font-family: "Proxima Nova";
  src: url('./assets/fonts/proxima-nova-${thickness}.eot');
  src:
    url('./assets/fonts/proxima-nova-${thickness}.eot?#iefix') format("embedded-opentype");
    url('./assets/fonts/proxima-nova-${thickness}.woff'); format("woff")
    url('./assets/fonts/proxima-nova-${thickness}.ttf'); format("truetype")
    url('./assets/fonts/proxima-nova-${thickness}.svg#proxima_nova'); format("svg")
  font-weight: ${weight};
}`;

injectGlobal`
  ${fontFace(100, 'thin')}
  ${fontFace(300, 'light')}
  ${fontFace(400, 'regular')}
  ${fontFace(600, 'semibold')}
  ${fontFace(700, 'bold')}
  ${fontFace(800, 'extrabold')}
  ${fontFace(900, 'black')}

  body {
    font-size: 18px;

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`;

/** Colors */
const colors = {
  charcoalGray: '#333d47',
  shuttleGray: '#50606f',
  warmGray: '#717171',
  silver: '#c1c1c1',
  bermudaGray: '#778ea6',
  alabaster: '#fcfcfc',
  red: '#d0021b',
  green: '#6fd300',
  white: '#ffffff',
  black: '#000000',

  // Specify rgba value instead of the word 'transparent' because of IE.
  transparent: 'rgba(255, 255, 255, 0)',
};

// Bootstrap grid
const gridTheme = {
  breakpoints: {
    giant: 1200,
    xl: 1200,

    desktop: 992,
    lg: 992,

    tablet: 768,
    md: 768,

    phone: 576,
    sm: 576,

    smaller: 575,
    xs: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 15,
  },
};

export { colors, gridTheme };
