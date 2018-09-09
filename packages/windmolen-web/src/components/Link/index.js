// @flow
import React, { type Node } from 'react';
import Pressable from '../Pressable';

type LinkProps = {
  asButton?: boolean,

  /** Buttom theme, c.f. see <Button /> */
  hideArrow?: boolean,
  children?: Node,
  icon?: string,
  small?: boolean,
  withComponent?: Node
};

const Link = (props: LinkProps) => <Pressable {...props} />;

Link.defaultProps = {
  as: 'a',
  variant: 'text',
};

export default Link;
