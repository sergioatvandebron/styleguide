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
  baseElement: 'a' | 'button',
  variant?: VariantName,

  /** Used with button* variants */
  small?: boolean,
  /** Used with button* variants */
  hideArrow?: boolean
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
  textDecoration: 'underline'
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
  textDecoration: 'none'
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
  textDecoration: 'none'
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
  textDecoration: 'none'
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
  display: ${props => props.variant === 'text' ? 'inline' : 'block'};
  padding: ${props => props.small ? '4px 15px' : '9px 20px'};
  text-align: left;
  text-decoration: ${variant('textDecoration')};
  width: 100%;
  ${props => props.variant !== 'text' && `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}

  ${StyledRightIcon} {
    background-position-y: -${variant('iconVariant')}em;
    position: relative;
    left: ${props => props.small ? 7 : 10}px;
  }

  &:hover {
    background-color: ${variant('hoverBackgroundColor')};
    color: ${variant('hoverColor')};
  }
`;

const StyledRightIcon = styled(Icon)`
  &&& {
    font-size: 200%;
  }
`;

const Pressable = (props: PressableProps) => {
  const { baseElement, children, ...componentProps } = props;
  const Component = pressableFactory(baseElement);
  const showArrowIcon = props.variant !== 'text' && !props.hideArrow;

  return (
    <Component {...componentProps}>
      {children}
      {showArrowIcon && <StyledRightIcon name="arrow-right" />}
    </Component>
  );
};

Pressable.defaultProps = {
  baseElement: 'button',
  variant: 'button-primary',
  small: false,
  hideArrow: false,
};

// last cast to make sure we don't accidentally mistype a prop
(Pressable.defaultProps: PressableProps);

export default Pressable;
