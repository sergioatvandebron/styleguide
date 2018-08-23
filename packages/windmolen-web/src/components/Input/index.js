// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import Base from '../Base';
import Icon from '../Icon';
import { colors } from '../../globals';
import { mediumUp } from '../../utils';

type InputProps = {
  error?: Node,
  touched?: boolean,
  isValid?: boolean,
  placeholderRight?: boolean,
  label?: Node,
  withIcon?: Node,
  iconWidth?: number,
  iconHeight?: number,

  /** CSS class for the container around `<input />` */
  className?: string
};

const getInputState = (props: InputProps) => {
  if (!props.touched) {
    return colors.transparent;
  }

  if (props.isValid) {
    return colors.green;
  }

  if (props.error || props.isValid === false) {
    return colors.red;
  }
};

const StyledInput = Base.withComponent('input').extend`
  background-color: ${colors.alabaster};
  border: 0;
  border-bottom: 1px solid ${props => getInputState(props)};
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.12);
  color: ${props => props.disabled ? colors.silver : colors.charcoalGray};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 9px 20px;
  padding-right: ${props => props.icon ? '60px' : '20px'};
  width: 100%;

  &:active,
  &:focus {
    outline: 0;
    border-bottom-color: ${props => !props.disabled ? colors.charcoalGray : colors.transparent};
  }

  &::placeholder {
    color: ${props => props.disabled ? colors.silver : colors.warmGray};
    text-align: ${props => props.placeholderRight ? 'right' : 'left'}
  }
`;

const Container = Base.extend`
  position: relative;
`;

const StyledLabel = Base.extend`
  font-size: 16px;
  color: ${colors.charcoalGray};
  margin-bottom: 5px;

  ${mediumUp('font-size: 20px; margin-bottom: 10px;')}
`;

const StyledErrorMessage = Base.extend`
  font-size: 14px;
  color: ${colors.red};
  line-height: 2;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 15px;
`;

const Input = ({ className, ...props }: InputProps) => (
  <Container className={className}>
    {props.label && (<StyledLabel>{props.label}</StyledLabel>)}
    <StyledInput {...props} />
    {props.error && (<StyledErrorMessage>{props.error}</StyledErrorMessage>)}
    {props.icon && (<StyledIcon name={props.icon} />)}
  </Container>
);

export default Input;
