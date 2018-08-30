// @flow
import type { Node } from 'react';
import styled from 'styled-components';
import React from 'react';
import Base from '../Base';
import { colors } from '../../globals';
import { media } from 'styled-bootstrap-grid';

const spacings = {
  mobile: {
    large: 50,
    medium: 30,
  },
  desktop: {
    large: 120,
    medium: 80,
  },
};

export type Spacing            = 'large' | 'medium';
export type Padding            = 'large' | 'medium';
export type SeparatorPlacement = 'top'   | 'bottom';
export type Separator          = 'border';

export type Props = {
  /** Expects a certain size of spacing given, such as: 'large' or 'medium'. */
  spacing?: Spacing,
  /** Expects a certain size of padding given, such as: 'large' or 'medium'. */
  padding?: Padding,
  /** A value that will be used to divide against the base value of the spacing or padding specified. */
  divider?: number,
  /** Expects a type of separator. */
  separator?: Separator,
  /** Expect the placement of the separator. */
  separatorPlacement?: SeparatorPlacement,

  wrapper?: string,
  children: Node,
};

const getSpacing = (breakpoint, divider, size, property, placement) => {
  if (spacings[breakpoint][size]) {
    const value = (spacings[breakpoint][size] / divider) || 0;
    switch (placement) {
    case 'top':
    case 'bottom':
      return `
        ${property}-${placement}: ${value}px;
      `;
    case 'top-bottom':
      return `
        ${property}-top: ${value}px;
        ${property}-bottom: ${value}px;
      `;
    }
  }
};

const getSeparator = (type, placement) => {
  switch (type) {
  case 'border':
    if (placement) {
      return `
        border-${placement}: 1px solid ${colors.silver};
      `;
    }
  }
};

const StyledComponentGroup = ({ wrapper, children, ...props }) => {
  const Group = styled(Base.withComponent(wrapper)).attrs(props)`
    ${props => getSeparator(props.separator, props.separatorPlacement)}
    ${props => getSpacing('mobile', props.divider, props.spacing, 'margin', 'top-bottom')}
    ${props => getSpacing('mobile', props.divider, props.padding, 'padding', 'top-bottom')}

    ${media.desktop`
      ${props => getSpacing('desktop', props.divider, props.spacing, 'margin', 'top-bottom')}
      ${props => getSpacing('desktop', props.divider, props.padding, 'padding', 'top-bottom')}
    `}
  `;
  return (
    <Group>
      {children}
    </Group>
  );
};

const StyledComponentChild = Base.withComponent('div').extend`
  & + & {
    ${props => getSpacing('mobile', 1, 'medium', 'margin', 'top')}

    ${media.desktop`
      ${props => getSpacing('desktop', 1, 'medium', 'margin', 'top')}
    `}
  }
`;

const ComponentGroup = ({ children, ...props }: Props) => {
  return (
    <StyledComponentGroup {...props}>
      {React.Children.map(children, (child) => (
        <StyledComponentChild>
          {child}
        </StyledComponentChild>
      ))}
    </StyledComponentGroup>
  );
};

ComponentGroup.defaultProps = {
  divider: 1,
  wrapper: 'div',
};

export default ComponentGroup;
