// @flow
import type { Node } from 'react';
import React from 'react';
import { StyledButton, ButtonText, StyledIcon } from './styles';
import arrowright from '../../assets/icons/arrowright.svg';

export type Props = {
  /** Either `primary` or `secondary` */
  type?: 'primary' | 'secondary',

  /** The actual icon to use, same as <Icon /> */
  withIcon?: Node,
  asTextButton: boolean,
  children?: Node,
  small?: boolean
};

const Button = (props: Props) => props.withIcon
  ? (
    <StyledButton {...props}>
      <StyledIcon source={props.withIcon} withIcon asTextButton={props.asTextButton} />
      <ButtonText withIcon>
        {props.children}
      </ButtonText>
    </StyledButton>
  ) : (
    <StyledButton {...props}>
      <ButtonText>
        {props.children}
      </ButtonText>
      <StyledIcon source={arrowright} asTextButton={props.asTextButton} />
    </StyledButton>
  );

Button.defaultProps = {
  type: 'primary',
  withIcon: null,
  asTextButton: false,
  small: false
};

export default Button;
