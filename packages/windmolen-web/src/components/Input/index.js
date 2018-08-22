// @flow
import React, { type Node } from 'react';
import Base from '../Base';
import { colors } from '../../globals';

type InputProps = {
  error?: Node,
  touched?: boolean,
  isValid?: boolean,
  placeholderRight?: boolean,
  label?: Node
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

const StyledLabel = Base.extend`
  color: ${colors.charcoalGray};
  margin-bottom: 10px;
`;

const StyledErrorMessage = Base.extend`
  font-size: 14px;
  color: ${colors.red};
  line-height: 2;
`;

const Input = (props: InputProps) => (
  <div>
    {props.label && (<StyledLabel>{props.label}</StyledLabel>)}
    <StyledInput {...props} />
    {props.error && (<StyledErrorMessage>{props.error}</StyledErrorMessage>)}
  </div>
);

export default Input;
