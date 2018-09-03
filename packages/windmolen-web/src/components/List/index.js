// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import Base from '../Base';
import Span from '../Span';
import Icon from '../Icon';

type ListProps = {
  icon?: string,
  children?: Node
};

// TODO also expose an <ol />
const Ul = Base.withComponent('ul').extend`
  list-style-type: none;
`;

const List = ({ children, ...props }: ListProps): Node => {
  const withIcon = React.Children.map(children, child => React.cloneElement(child, { inheritedIcon: props.icon }));

  return <Ul {...props}>{withIcon}</Ul>;
};

List.defaultProps = {
  icon: 'arrow-right'
};

type ItemProps = {
  icon?: string,
  inheritedIcon: string,
  children?: Node
};

// Item
const Li = Base.extend`
  padding-left: 0;
  position: relative;

  ${media.desktop`
    padding-left: 20px;
  `}
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: -0.17em;
  top: 0.05em;

  ${media.desktop`
    left: -0.5em;
    top: 0.15em;
  `}
`;

const Item = ({ icon, inheritedIcon, children, ...props }: ItemProps) => {
  const usedIcon = icon || inheritedIcon;

  return (
    <Li {...props}>
      <StyledIcon name={usedIcon} />
      <Span fontSize="body-xsmall">{children}</Span>
    </Li>
  );
};

List.Item = Item;

export default List;
