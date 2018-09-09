// @flow
import { type ReactComponentFunctionalUndefinedDefaultProps } from 'styled-components';
import styled from 'styled-components';
import { px } from '../../utils';
import { media } from 'styled-bootstrap-grid';

export type FontSize = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'button'
  | 'button-small'
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

const fontSize = (props: BaseProps, isMobile: boolean = true) => {
  switch (props.fontSize) {
  case 'h1':
    return px(isMobile ? 40 : 80);

  case 'h2':
    return px(isMobile ? 35 : 55);

  case 'h3':
    return px(isMobile ? 28 : 40);

  case 'h4':
    return px(isMobile ? 18 : 24);

  case 'h5':
    return px(18);

  case 'button-small':
    return px(14);

  case 'button':
  case 'body-xsmall':
    return px(16);

  case 'lead':
    return px(isMobile ? 20 : 24);

  case 'super-huge':
    return px(isMobile ? 80 : 100);

  case 'link':
    return '100%';

  case 'body':
  case 'regular':
  default:
    return px(isMobile ? 18 : 20);
  }
};

const lineHeight = (props: BaseProps, isMobile: boolean = true) => {
  switch (props.fontSize) {
  case 'h1':
    return px(isMobile ? 45 : 85);

  case 'h2':
    return px(isMobile ? 45 : 60);

  case 'h3':
    return px(isMobile ? 40 : 50);

  case 'h4':
    return px(isMobile ? 24 : 30);

  case 'h5':
    return px(30);

  case 'button-small':
    return isMobile ? 2.29 : 1.57;

  case 'button':
    return px(isMobile ? 20 : 32);

  case 'body-xsmall':
    return px(32);

  case 'lead':
    return px(isMobile ? 32 : 40);

  case 'super-huge':
    return px(isMobile ? 53 : 110);

  case 'link':
    return '100%';

  case 'body':
  case 'regular':
  default:
    return px(isMobile ? 32 : 40);
  }
};

const Base = styled.div`
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

  ${props => props.margin ? `margin: ${props.margin}` : ''}
  ${props => props.withShadow ? media.desktop`box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18)` : ''}
  ${props => media.desktop`font-size: ${fontSize(props, false)};`}
  ${props => media.desktop`line-height: ${lineHeight(props, false)};`}
`;

(Base: ReactComponentFunctionalUndefinedDefaultProps<BaseProps>);

export default Base;
