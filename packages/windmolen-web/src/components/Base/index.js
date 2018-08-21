// @flow
import styled from 'styled-components';
import { px, largeUp } from '../../utils';

export type FontSize = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'button'
  | 'body-xsmall'
  | 'lead'
  | 'body'
  | 'regular'
  | 'super-huge';

export type BaseProps = {
  withShadow?: boolean,
  fontSize?: FontSize,
  margin?: string
};

const fontSize = (props: BaseProps) => {
  switch (props.fontSize) {
  case 'h1': return px(80);
  case 'h2': return px(55);
  case 'h3': return px(40);
  case 'h4': return px(24);
  case 'h5': return px(18);
  case 'button':
  case 'body-xsmall': return px(16);
  case 'lead': return px(24);
  case 'super-huge': return px(100);
  case 'body':
  case 'regular': 
  default:
    return px(20);
  }
};

const lineHeight = (props: BaseProps) => {
  switch (props.fontSize) {
  case 'h1': return px(85);
  case 'h2': return px(60);
  case 'h3': return px(50);
  case 'h4': return px(30);
  case 'h5': return px(30);
  case 'button':
  case 'body-xsmall': return px(32);
  case 'lead': return px(40);
  case 'super-huge': return px(110);
  case 'body':
  case 'regular': 
  default:
    return px(40);
  }
};

const margin = (props: BaseProps): string => props.margin !== undefined
  ? props.margin
  : '0';

const Base = styled.div`
  background-color: inherit;
  box-shadow: ${props => props.withShadow ? '-22px 16px 22px 0 rgba(0, 0, 0, 0.18)' : 'unset'};
  box-sizing: border-box;
  color: inherit;
  fill: inherit;
  font-family: inherit;
  font-size: ${props => fontSize(props)};
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: ${props => lineHeight(props)};
  margin: ${props => margin(props)};

  ${props => props.withShadow ? largeUp('box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18)') : ''}
`;

export default Base;
