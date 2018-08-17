// @flow
import { breakingPoints } from './globals';

const px = (value: number): string => `${value}px`;

const mediaQuery = (min: string) => (contents: string) => `
  @media (min-width: ${min}) {
    ${contents}
  }
`;

// media query helpers
const smallUp = mediaQuery(px(breakingPoints.small));
const mediumUp = mediaQuery(px(breakingPoints.medium));
const largeUp = mediaQuery(px(breakingPoints.large));
const extraLargeUp = mediaQuery(px(breakingPoints.extraLarge));

export {
  px,
  mediaQuery,
  smallUp,
  mediumUp,
  largeUp,
  extraLargeUp
};
