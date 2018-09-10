// @flow
import type { Node } from 'react';
import React from 'react';
import Pressable, { type VariantType } from '../Pressable';

export type Props = {
  /** The actual icon to use, same as <Icon /> */
  icon?: string,
  hideArrow?: boolean,
  children?: Node,
  small?: boolean,
  variant?: VariantType
};

const Button = (props: Props) => <Pressable {...props} />;

Button.defaultProps = {
  as: 'button',
  variant: 'button-primary',
  hideArrow: false,
};

export default Button;
