// @flow
import React from 'react';
import type ButtonTheme from '../Button';
import Base from '../Base';
import { getStyledButton, StyledIcon, ButtonText as StyledSpan } from '../Button/styles';

type LinkProps = {
  asButton?: boolean,

  /** Buttom theme, c.f. see <Button /> */
  theme?: ButtonTheme,
  hideArrow?: boolean,
  children?: Node,
  icon?: string,
  small?: boolean
};

const StyledLink = Base.withComponent('a');
const StyledLinkAsButton = getStyledButton('a').extend`
  display: inline-block;
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
  ) : <StyledLink {...props} />;

Link.defaultProps = {
  theme: 'primary',
};

export default Link;
