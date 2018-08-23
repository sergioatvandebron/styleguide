// @flow
import type { Node } from 'react';
import React from 'react';
import { StyledButton, ButtonText, StyledIcon } from './styles';

export type ButtonTheme = 'primary'
  | 'alternate'
  | 'text'
  | {
    color: string,
    backgroundColor: string,
    hoverColor: string,
    hoverBackgroundColor: string,
    shadow: string,
    border: string
  };

export type Props = {
  /** The actual icon to use, same as <Icon /> */
  icon?: string,
  hideArrow?: boolean,
  children?: Node,
  small?: boolean,

  /** Either `primary`, `alternate`, 'text', or a theme object */
  theme?: ButtonTheme
};

const Button = (props: Props) => props.icon
  ? (
    <StyledButton {...props}>
      <StyledIcon name={props.icon} hide={props.theme === 'text' || props.hideArrow} />
      <ButtonText withIcon>
        {props.children}
      </ButtonText>
    </StyledButton>
  ) : (
    <StyledButton {...props}>
      <ButtonText hideArrow={props.hideArrow}>
        {props.children}
      </ButtonText>
      <StyledIcon name="arrow-right" hide={props.theme === 'text' || props.hideArrow} />
    </StyledButton>
  );

Button.defaultProps = {
  type: 'primary',
  icon: null,
  asTextButton: false,
  small: false,
  theme: 'primary',
  hideArrow: false
};

export default Button;
