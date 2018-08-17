// @flow
import styled from 'styled-components';
import { colors } from '../globals';

export type Theme = 'lightBackground' | 'darkBackground';

const themeColor = (theme: ?Theme) => theme === 'darkBackground'
  ? colors.white
  : colors.warmGray;

const themeBackgroundColor = (theme: ?Theme) => theme === 'darkBackground'
  ? colors.charcoalGray
  : colors.white;

const Base = styled.div`
  background-color: ${props => themeBackgroundColor(props.theme)};
  color: ${props => themeColor(props.theme)};
  fill: ${props => themeColor(props.theme)};
  font-family: "Proxima Nova";
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 2;
`;

export default Base;
