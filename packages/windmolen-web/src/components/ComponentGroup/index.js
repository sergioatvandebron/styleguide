// @flow
import type { Node } from 'react';
import React from 'react';
import Base from '../Base';
import { colors } from '../../globals';

const spacings = {
  large: 120,
  medium: 80,
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

  children: Node,
};

const getSpacing = (divider, size, property, placement) => {
  if (spacings[size]) {
    const value = spacings[size] / divider;
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
  console.log('type', type, placement);
  switch (type) {
  case 'border':
    if (placement) {
      return `
        border-${placement}: 1px solid ${colors.silver};
      `;
    }
  }
};

const StyledComponentGroup = Base.withComponent('div').extend`
  ${props => getSpacing(props.divider, props.spacing, 'margin', 'top-bottom')}
  ${props => getSpacing(props.divider, props.padding, 'padding', 'top-bottom')}
  ${props => getSeparator(props.separator, props.separatorPlacement)}
`;

const StyledComponentChild = Base.withComponent('div').extend`
  & + & {
    ${props => getSpacing(1, 'medium', 'margin', 'top')}
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
};

export default ComponentGroup;
