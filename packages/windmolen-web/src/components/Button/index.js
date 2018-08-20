// @flow
import type { Node } from 'react';
import React from 'react';
import { StyledButton, ButtonText, StyledIcon } from './styles';
import arrowright from '../../assets/icons/arrowright.svg';

export type ButtonTheme = 'primary'
  | 'alternate'
  | 'text'
  | {
    color: string,
    backgroundColor: string,
    hoverColor: string,
    hoverBackgroundColor: string,
    shadow: string
  };

export type Props = {
  /** The actual icon to use, same as <Icon /> */
  withIcon?: Node,
  children?: Node,
  small?: boolean,

  /** Either `primary`, `alternate`, 'text', or a theme object */
  theme?: ButtonTheme
};

const Button = (props: Props) => props.withIcon
  ? (
    <StyledButton {...props}>
      <StyledIcon source={props.withIcon} withIcon hide={props.theme === 'text'} />
      <ButtonText withIcon>
        {props.children}
      </ButtonText>
    </StyledButton>
  ) : (
    <StyledButton {...props}>
      <ButtonText>
        {props.children}
      </ButtonText>
      <StyledIcon source={arrowright} hide={props.theme === 'text'} />
    </StyledButton>
  );

Button.defaultProps = {
  type: 'primary',
  withIcon: null,
  asTextButton: false,
  small: false,
  theme: 'primary'
};

export default Button;
