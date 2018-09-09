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

const Button = (props: Props) => {
  // TODO wait for do expressions to land in ecmascript, because i will NOT do `let`
  const fontSize = (function(props) {
    if (props.small) {
      return 'button-small';
    }

    if (props.variant === 'text') {
      return 'inherit';
    }

    return 'button';
  })(props);

  return <Pressable fontSize={fontSize} {...props} />;
};

Button.defaultProps = {
  as: 'button',
  variant: 'button-primary',
  hideArrow: false,
};

export default Button;
