// @flow
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-thin.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-thin.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-thin.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-thin.svg')}?#proxima_nova) format("svg");
  font-weight: 100;
  }

  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-light.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-light.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-light.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-light.svg')}?#proxima_nova) format("svg");
  font-weight: 300;
  }

  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-regular.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-regular.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-regular.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-regular.svg')}?#proxima_nova) format("svg");
  font-weight: 400;
  }

  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-semibold.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-semibold.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-semibold.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-semibold.svg')}?#proxima_nova) format("svg");
  font-weight: 600;
  }

  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-bold.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-bold.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-bold.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-bold.svg')}?#proxima_nova) format("svg");
  font-weight: 700;
  }

  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-extrabold.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-extrabold.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-extrabold.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-extrabold.svg')}?#proxima_nova) format("svg");
  font-weight: 800;
  }

  @font-face {
  font-family: "proxima nova";
  src: url(${require('./assets/fonts/proxima-nova-black.eot')});
  src:
    url(${require('./assets/fonts/proxima-nova-black.eot')}?#iefix) format("embedded-opentype"),
    url(${require('./assets/fonts/proxima-nova-black.ttf')}) format("truetype"),
    url(${require('./assets/fonts/proxima-nova-black.svg')}?#proxima_nova) format("svg");
  font-weight: 900;
  }

  body {
    font-size: 18px;

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`;

/** colors */
const colors = {
  charcoalGray: '#333d47',
  shuttleGray: '#50606f',
  warmGray: '#717171',
  silver: '#c1c1c1',
  gallery: '#ececec',
  bermudaGray: '#778ea6',
  alabaster: '#fcfcfc',
  red: '#d0021b',
  green: '#6fd300',
  white: '#ffffff',
  black: '#000000',

  // specify rgba value instead of the word 'transparent' because of ie.
  transparent: 'rgba(255, 255, 255, 0)',
};

// bootstrap grid
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
    padding: 20,
  },
  col: {
    padding: 20,
  },
  container: {
    padding: 20,
  },
};

export { colors, gridTheme };
