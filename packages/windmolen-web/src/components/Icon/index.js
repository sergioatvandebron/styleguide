// @flow
import type { Node } from 'react';
// import type { Theme } from '../Base';
import React from 'react';
import Span from '../Span';

type Props = {
  source: any,
  theme?: any,
  width?: number,
  height?: number,
};

const StyledSpan = Span.extend`
  display: inline-block;
  height: ${props => props.height}px;
  vertical-align: middle;
  width: ${props => props.width}px;

  & > svg {
    display: block;
    height: 100%;
    position: relative;
    top: -2px;
    width: 100%;
  }
}`;

const Icon = (props: Props): Node => (
  <StyledSpan
    dangerouslySetInnerHTML={{ __html: props.source }}
    {...props}
  />
);

Icon.defaultProps = {
  width: 20,
  height: 20
};

export default Icon;
