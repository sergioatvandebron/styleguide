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

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
}`;

/** Colors */
const colors = {
  charcoalGray: '#333d47',
  charcoalGrayHover: '#50606f',
  warmGray: '#717171',
  warmGrayHover: '#c1c1c1',
  bermudaGray: '#778ea6',
  white: '#ffffff',
  primary: '',
  alternate: ''
};

colors.primary = colors.charcoalGray;
colors.alternate = colors.warmGray;

export { colors };