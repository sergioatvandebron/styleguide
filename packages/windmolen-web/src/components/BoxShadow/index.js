// @flow
import React from 'react';
import Base from '../Base';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export type Props = {};

const StyledBoxShadow = ({ wrapper, ...props }) => {
  const Element = styled(wrapper).attrs(props)`
    box-shadow: -20px 14px 20px 0 rgba(0, 0, 0, 0.18);
    display: inline-block;

    ${media.desktop`
      box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18);
    `}
  `;

  return <Element />;
};

const BoxShadow = ({ children, ...props }: Props) => {
  return React.Children.map(children, (child) => (
    <StyledBoxShadow {...child.props} wrapper={child.type} />
  ));
};

export default BoxShadow;
