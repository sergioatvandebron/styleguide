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
  padding: 0;

  ${media.desktop`
    padding-left: 20px;
  `}
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
  position: relative;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: -5px;
  top: 1px;

  ${media.desktop`
    left: 5px;
    top: 5px;
  `}
`;

const StyledItemContent = Span.extend`
  margin-left: 25px;

  ${media.desktop`
    margin-left: 40px;
  `}
`;

const Item = ({ icon, inheritedIcon, children, ...props }: ItemProps) => {
  const usedIcon = icon || inheritedIcon;

  return (
    <Li {...props}>
      <StyledIcon name={usedIcon} />
      <StyledItemContent fontSize="body-xsmall">{children}</StyledItemContent>
    </Li>
  );
};

List.Item = Item;

export default List;
