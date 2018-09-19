// @flow
import type { Node } from 'react';
import React from 'react';
import Pressable, { type VariantType } from '../Pressable';

export type Props = {
  /** The actual icon to use, same as <Icon /> */
  icon?: string,
  iconPlacement?: 'start' | 'end',
  hideIcon?: boolean,
  children?: Node,
  small?: boolean,
  variant?: VariantType
};

const Button = (props: Props) => <Pressable {...props} />;

Button.defaultProps = {
  as: 'button',
  variant: 'button-primary',
  hideIcon: false,
  iconPlacement: 'end',
};

export default Button;
