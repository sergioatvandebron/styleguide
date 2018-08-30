// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import Base from '../Base';
import Icon from '../Icon';
import { colors } from '../../globals';
import { media } from 'styled-bootstrap-grid';

type InputProps = {
  error?: Node,
  touched?: boolean,
  isValid?: boolean,
  placeholderRight?: boolean,
  label?: Node,
  onIconClick?: Function,
  type?: string,

  /** The name of the icon. */
  icon?: string,

  /** CSS class for the container around `<input />`. */
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
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.12);
  color: ${props => props.disabled ? colors.silver : colors.charcoalGray};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 9px 20px;
  padding-right: ${props => props.icon ? '70px' : '20px'};
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 2;
  ${props => props.touched && !props.suggestions ? `border-bottom: 1px solid ${getInputState(props)};` : ''}

  &:active,
  &:focus {
    outline: 0;
    ${props => !props.suggestions && `border-bottom: 1px solid ${!props.disabled ? colors.charcoalGray : colors.transparent};`}
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

  ${media.desktop`
    font-size: 20px;
    margin-bottom: 10px;
  `}
`;

const StyledErrorMessage = Base.extend`
  font-size: 14px;
  color: ${colors.red};
  line-height: 2;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const StyledIconContainer = Base.extend`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  background-color: ${colors.charcoalGray};
  z-index: 3;

  &:focus,
  &:active,
  &:hover {
    background-color: ${colors.shuttleGray};
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledAutoSuggestion = Base.extend`
  position: absolute;
  box-shadow: 0 11px 15px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding-top: 55px;
  padding-bottom: 5px;

  .suggestion {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 32px;

    &:focus,
    &:active,
    &:hover {
      color: ${colors.silver};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const Input = ({ className, autoCompleteProps, ...props }: InputProps) => {
  return (
    <Container className={className}>
      {props.label && (
        <StyledLabel>{props.label}</StyledLabel>
      )}

      {props.suggestions ? (
        <Autocomplete
          items={props.suggestions}
          wrapperStyle={{  }}
          renderInput={({ ref, value, ...inputProps }) => (
            <StyledInput
              innerRef={(node) => ref(node)}
              {...inputProps}
              {...props}
            />
          )}
          renderMenu={(children) => (
            <StyledAutoSuggestion>
              {children}
            </StyledAutoSuggestion>
          )}
          {...autoCompleteProps}
        />
      ) : (
        <StyledInput {...props} />
      )}

      {props.error && (
        <StyledErrorMessage>{props.error}</StyledErrorMessage>
      )}

      {props.icon && (
        <StyledIconContainer onClick={props.onIconClick}>
          <StyledIcon variant={1} name={props.icon} fontSize="40px" />
        </StyledIconContainer>
      )}
    </Container>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
