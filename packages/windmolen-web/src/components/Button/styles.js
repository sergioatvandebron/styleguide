// @flow
import type { Props, ButtonTheme } from './';
import styled from 'styled-components';
import { colors } from '../../globals';
import Base from '../Base';
import Icon from '../Icon';
import Span from '../Span';
import { px } from '../../utils';

/**
 * Themes
 */
type DefaultThemes = {
  [theme_name: string]: ButtonTheme
};

const themes: DefaultThemes = {
  primary: {
    color: colors.white,
    backgroundColor: colors.charcoalGray,
    hoverColor: colors.white,
    hoverBackgroundColor: colors.shuttleGray,
    shadow: '0 0 8px 0 rgba(0, 0, 0, 0.12)',
    border: '0'
  },

  alternate: {
    color: colors.charcoalGray,
    backgroundColor: colors.white,
    hoverColor: colors.bermudaGray,
    hoverBackgroundColor: colors.white,
    shadow: '0 0 8px 0 rgba(51, 61, 71, 0.12)',
    border: '0'
  },

  text: {
    color: colors.warmGray,
    backgroundColor: colors.transparent,
    hoverColor: colors.silver,
    hoverBackgroundColor: colors.transparent,
    shadow: 'none',
    border: '0'
  },

  outline: {
    color: colors.white,
    backgroundColor: colors.transparent,
    hoverColor: colors.white,
    hoverBackgroundColor: colors.transparent,
    shadow: 'none',
    border: `solid 1px ${colors.white}`
  }
};

const getThemeProp = (props: Props, property: string): string => {
  if (typeof props.theme !== 'string') {
    return props.theme[property];
  }

  return themes[props.theme][property];
};

const buttonTextMarginRight = (props: Props): string => {
  if (props.withIcon) {
    return px(25);
  }

  if (props.hideArrow) {
    return '0';
  }

  return px(50);
};

export const ButtonText = styled(Span).attrs({
  fontSize: 'button'
})`
  background-color: inherit;
  color: inherit;
  font-weight: 600;
  line-height: inherit;
  margin-right: ${props => buttonTextMarginRight(props)};
`;

export const StyledButton = Base.withComponent('button').extend`
  background-color: ${props => getThemeProp(props, 'backgroundColor')};
  border: ${props => getThemeProp(props, 'border')};
  box-shadow: ${props => getThemeProp(props, 'shadow')};
  color: ${props => getThemeProp(props, 'color')};
  fill: ${props => getThemeProp(props, 'color')};
  padding: ${props => props.small ? '4px 15px' : '9px 20px'};
  line-height: 1.6;
  text-decoration: ${props => props.theme === 'text' ? 'underline' : 'none'};

  &:hover {
    background-color: ${props => getThemeProp(props, 'hoverBackgroundColor')};
    color: ${props => getThemeProp(props, 'hoverColor')}
    fill: ${props => getThemeProp(props, 'hoverColor')};
  }
`;

export const StyledIcon = styled(Icon)`
  background-color: inherit;
  display: ${props => props.hide ? 'none' : 'inline-block'};
  fill: inherit;
  margin-top: 2px;
  margin-right: ${props => props.withIcon ? '15px' : 0};
`;
