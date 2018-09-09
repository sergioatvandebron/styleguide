// @flow
/* eslint-disable no-unused-vars */
import React, { type Node } from 'react';
import styled, { type ReactComponentStyled } from 'styled-components';
import Base from '../Base';
import Icon from '../Icon';
import { colors } from '../../globals';
import { px } from '../../utils';

type VariantName = 'text'
  | 'button-primary'
  | 'button-alternate'
  | 'button-outline';

type Variant = {
  [cssProperty: string]: string | number
}

type VariantList = {
  [VariantName]: Variant
};

type PressableProps = {
  children?: Node,

  /** Either a html element (e.g. "'a'") or a React component */
  as?: 'string' | Node,
  variant?: VariantName,

  /** Used with button* variants */
  small?: boolean,
  /** Used with button* variants */
  hideArrow?: boolean,
  /** Name of the icon to use, same as <Icon /> */
  icon?: string
};

// Pressable variant definitions
const pressableText: Variant = {
  color: colors.warmGray,
  backgroundColor: colors.transparent,
  hoverColor: colors.silver,
  hoverBackgroundColor: colors.transparent,
  shadow: 'none',
  border: '0',
  iconVariant: 0,
  hoverIconVariant: 0,
  textDecoration: 'underline',
  cursor: 'pointer',
};

const pressableButtonPrimary: Variant = {
  color: colors.white,
  backgroundColor: colors.charcoalGray,
  hoverColor: colors.white,
  hoverBackgroundColor: colors.shuttleGray,
  shadow: '0 0 8px 0 rgba(0, 0, 0, 0.12)',
  border: '0',
  iconVariant: 1,
  hoverIconVariant: 1,
  textDecoration: 'none',
  cursor: 'default',
};

const pressableButtonAlternate: Variant = {
  color: colors.charcoalGray,
  backgroundColor: colors.white,
  hoverColor: colors.bermudaGray,
  hoverBackgroundColor: colors.white,
  shadow: '0 0 8px 0 rgba(51, 61, 71, 0.12)',
  border: '0',
  iconVariant: 0,
  hoverIconVariant: 2,
  textDecoration: 'none',
  cursor: 'default',
};

const pressableButtonOutline: Variant = {
  color: colors.white,
  backgroundColor: colors.transparent,
  hoverColor: colors.white,
  hoverBackgroundColor: colors.transparent,
  shadow: 'none',
  border: `solid 1px ${colors.white}`,
  iconVariant: 1,
  hoverIconVariant: 1,
  textDecoration: 'none',
  cursor: 'default',
};

const pressableVariants: VariantList = {
  'text': pressableText,
  'button-primary': pressableButtonPrimary,
  'button-alternate': pressableButtonAlternate,
  'button-outline': pressableButtonOutline
};

// utils to access the property value for a given Pressable variant
const getVariantProperty = (variant: VariantName, property: string): string | number => pressableVariants[variant][property];
const variant = property => props => getVariantProperty(props.variant, property);

const pressableFactory = (element): ReactComponentStyled<PressableProps> => Base.withComponent(element).extend`
  background-color: ${variant('backgroundColor')};
  border: ${variant('border')};
  box-shadow: ${variant('shadow')};
  color: ${variant('color')};
  cursor: ${variant('cursor')};
  display: ${props => props.variant === 'text' ? 'inline' : 'block'};
  font-weight: 600;
  padding: ${props => props.variant === 'text' ? 0 : '9px 20px'};
  text-align: left;
  text-decoration: ${variant('textDecoration')};
  width: ${props => props.variant === 'text' ? 'auto' : '100%'};

  ${props => props.variant !== 'text' && `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}

  ${StyledRightIcon} {
    background-position-y: -${variant('iconVariant')}em;
    position: relative;
    left: ${props => props.small ? 7 : 10}px;
  }

  ${StyledLeftIcon} {
    background-position-y: -${variant('iconVariant')}em;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${variant('hoverBackgroundColor')};
    color: ${variant('hoverColor')};

    ${StyledRightIcon},
    ${StyledLeftIcon} {
      background-position-y: -${variant('hoverIconVariant')}em;
    }
  }
`;

const StyledRightIcon = styled(Icon)`
  flex: 0 0 auto;

  &&& {
    font-size: 200%;
  }
`;

const StyledLeftIcon = styled(Icon)`
  &&& {
    font-size: 200%;
  }
`;

const StyledPressableText = styled('span')`
  flex: 1 0 auto;
`;

const Pressable = (props: PressableProps) => {
  const { as: baseElement, children, icon, ...componentProps } = props;
  const Component = pressableFactory(baseElement);
  const showArrowIcon = props.variant !== 'text' && !props.hideArrow;
  const showIcon = props.icon && props.variant !== 'text';

  return (
    <Component {...componentProps}>
      {showIcon && <StyledLeftIcon name={icon} />}
      <StyledPressableText>{children}</StyledPressableText>
      {showArrowIcon && <StyledRightIcon name="arrow-right" />}
    </Component>
  );
};

Pressable.defaultProps = {
  as: 'button',
  variant: 'button-primary',
  small: false,
  hideArrow: false,
};

// last cast to make sure we don't accidentally mistype a prop
(Pressable.defaultProps: PressableProps);

export default Pressable;
