// @flow
import React, { type Node, PureComponent } from 'react';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import Base from '../Base';
import Span from '../Span';
import Icon from '../Icon';
import Bold from '../Bold';
import Paragraph from '../Paragraph';
import { colors } from '../../globals';

type ListProps = {
  icon?: string,
  children?: Node
};

// TODO also expose an <ol />
const Ul = styled(Base.withComponent('ul'))`
  list-style-type: none;
  padding: 0;
`;

const List = ({ children, ...props }: ListProps): Node => {
  const withIcon = React.Children.map(children, child => React.cloneElement(child, {
    inheritedIcon: props.icon,
  }));

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

type ExpandableItemProps = ItemProps & {
  handleClick: Function,
  defaultExpanded: boolean,
  title: Node,
  children?: Node
}

// Item
const Li = styled(Base.withComponent('li'))`
  position: relative;
  color: ${colors.charcoalGray};
  padding-left: 30px;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: -5px;

  ${media.desktop`
    left: -8px;
  `}
`;

const StyledItemContent = styled(Span)`
  display: block;
  margin-left: 0;
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

// expandable Item
const ItemWithPointer = styled(Item)`
  cursor: pointer;
`;

const BoldWithPointer = styled(Bold)`
  cursor: pointer;
`;

const ItemWithRotatedIcon = styled(Item)`
  ${StyledIcon} {
    transform: rotate(90deg);
  }
`;

class ExpandableItem extends PureComponent<ExpandableItemProps, { isExpanded: boolean }> {
  static defaultProps = {
    defaultExpanded: false,
    handleClick() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: props.defaultExpanded
    };
  }

  toggleExpanded = () => {
    const isExpanded = !this.state.isExpanded;

    this.props.handleClick(isExpanded);
    this.setState({ isExpanded });
  }

  render() {
    const { title, children } = this.props;

    return this.state.isExpanded
      ? (
        <ItemWithRotatedIcon {...this.props} icon="caret-right" onClick={this.toggleExpanded}>
          <BoldWithPointer>{title}</BoldWithPointer>
          <Paragraph>{children}</Paragraph>
        </ItemWithRotatedIcon>
      ) : (
        <ItemWithPointer {...this.props} icon="caret-right" onClick={this.toggleExpanded}>
          {title}
        </ItemWithPointer>
      );
  }
}

List.Item = Item;
List.ExpandableItem = ExpandableItem;

export default List;
