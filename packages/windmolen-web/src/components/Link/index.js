// @flow
import React from 'react';
import Pressable, { type PressableProps } from '../Pressable';

type LinkProps = PressableProps;

const Link = (props: LinkProps) => <Pressable {...props} />;

Link.defaultProps = {
  as: 'a',
  variant: 'text',
};

export default Link;
