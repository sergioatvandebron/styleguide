// @flow
import type { StatelessFunctionalComponent } from 'react';
import styled from 'styled-components';
import { largeUp } from '../utils';
import { colors } from '../globals';

export type Theme = 'lightBackground' | 'darkBackground';
export type BaseProps = {
  theme?: Theme,
  withShadow?: boolean
};

const themeColor = (theme: ?Theme) => theme === 'darkBackground'
  ? colors.white
  : colors.warmGray;

const themeBackgroundColor = (theme: ?Theme) => theme === 'darkBackground'
  ? colors.charcoalGray
  : colors.white;

const Base: StatelessFunctionalComponent<BaseProps> = styled.div`
  background-color: ${props => themeBackgroundColor(props.theme)};
  box-shadow: ${props => props.withShadow ? '-22px 16px 22px 0 rgba(0, 0, 0, 0.18)' : 'unset'};
  color: ${props => themeColor(props.theme)};
  fill: ${props => themeColor(props.theme)};
  font-family: "Proxima Nova";
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 2;

  ${props => props.withShadow ? largeUp('box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18)') : ''}
`;

export default Base;
