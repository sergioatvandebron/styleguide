// @flow
import React from 'react';
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
  small?: boolean
};

const StyledLink = Base.withComponent('a').extend`
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

const Link = (props: LinkProps) => props.asButton
  ? (
    <StyledLinkAsButton {...props} theme={props.theme}>
      {props.icon && <StyledIcon name={props.icon} />}

      <StyledSpan hideArrow={props.hideArrow}>{props.children}</StyledSpan>

      {!props.hideArrow && !props.icon && (
        <StyledIcon hide={props.hideArrow} name="arrow-right" />
      )}
    </StyledLinkAsButton>
  ) : <StyledLink fontSize="link" {...props} />;

Link.defaultProps = {
  theme: 'primary',
};

export default Link;
