// @flow
import React from 'react';
import styled from 'styled-components';
import type ButtonTheme from '../Button';
import Base from '../Base';
import { getStyledButton, StyledIcon, ButtonText as StyledSpan } from '../Button/styles';
import { colors } from '../../globals';

type LinkProps = {
  asButton?: boolean,

  /** Buttom theme, c.f. see <Button /> */
  theme?: ButtonTheme,
  hideArrow?: boolean,
  children?: Node,
  icon?: string,
  small?: boolean,
  withComponent?: Node
};

const getStyledLink = withComponent =>
  (withComponent ? styled(withComponent) : Base.withComponent('a').extend)`
  color: ${colors.warmGray};
  background-color: ${colors.transparent};
  text-decoration: underline;

  &:hover {
    color: ${colors.silver};
    background-color: ${colors.transparent};
    text-decoration: underline;
  }
`;

const StyledLinkAsButton = getStyledButton('a').extend`
  display: inline-block;

  &:hover {
    text-decoration: none;
  }
`;

const Link = (props: LinkProps) => {
  if (props.asButton) {
    return (
      <StyledLinkAsButton {...props} theme={props.theme}>
        {props.icon && <StyledIcon name={props.icon} />}

        <StyledSpan hideArrow={props.hideArrow}>{props.children}</StyledSpan>

        {!props.hideArrow && !props.icon && (
          <StyledIcon hide={props.hideArrow} name="arrow-right" />
        )}
      </StyledLinkAsButton>
    );
  }

  const StyledLink = getStyledLink(props.withComponent);
  return <StyledLink {...props} />;
};

Link.defaultProps = {
  theme: 'primary',
  fontSize: 'link',
};

export default Link;
