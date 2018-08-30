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
    border: '0',
    iconVariant: 1,
    hoverIconVariant: 1,
  },

  alternate: {
    color: colors.charcoalGray,
    backgroundColor: colors.white,
    hoverColor: colors.bermudaGray,
    hoverBackgroundColor: colors.white,
    shadow: '0 0 8px 0 rgba(51, 61, 71, 0.12)',
    border: '0',
    iconVariant: 0,
    hoverIconVariant: 2,
  },

  text: {
    color: colors.warmGray,
    backgroundColor: colors.transparent,
    hoverColor: colors.silver,
    hoverBackgroundColor: colors.transparent,
    shadow: 'none',
    border: '0',
    iconVariant: 0,
    hoverIconVariant: 0,
  },

  outline: {
    color: colors.white,
    backgroundColor: colors.transparent,
    hoverColor: colors.white,
    hoverBackgroundColor: colors.transparent,
    shadow: 'none',
    border: `solid 1px ${colors.white}`,
    iconVariant: 1,
    hoverIconVariant: 1,
  }
};

const getThemeProp = (props: Props, property: string): string => {
  if (typeof props.theme !== 'string') {
    return props.theme[property];
  }

  return themes[props.theme][property];
};

const buttonTextMarginRight = (props: Props): string => {
  if (props.hideArrow) {
    return '0';
  }

  return px(20);
};

export const ButtonText = styled(Span).attrs({
  fontSize: 'button'
})`
  background-color: inherit;
  color: inherit;
  font-weight: 600;
  line-height: inherit;
  margin-right: ${props => buttonTextMarginRight(props)};

  &:hover {
    text-decoration: none;
  }
`;

export const getStyledButton = (componentType: string) => styled(Base.withComponent(componentType))
  .attrs({ fontSize: 'button' })`
    background-color: ${props => getThemeProp(props, 'backgroundColor')};
    border: ${props => getThemeProp(props, 'border')};
    box-shadow: ${props => getThemeProp(props, 'shadow')};
    color: ${props => getThemeProp(props, 'color')};
    padding: ${props => props.small ? '4px 15px' : '9px 20px'};
    text-decoration: ${props => props.theme === 'text' ? 'underline' : 'none'};

    ${StyledIcon} {
      background-position-y: -${props => getThemeProp(props, 'iconVariant')}em;
    }

    &:hover {
      background-color: ${props => getThemeProp(props, 'hoverBackgroundColor')};
      color: ${props => getThemeProp(props, 'hoverColor')}

      ${StyledIcon} {
        background-position-y: -${props => getThemeProp(props, 'hoverIconVariant')}em;
      }
    }
`;

export const StyledIcon = styled(Icon)`
  display: ${props => props.hide ? 'none' : 'inline-block'};
  margin-right: ${props => props.icon ? '15px' : 0};

  &&& {
    font-size: 200%;
  }
`;
