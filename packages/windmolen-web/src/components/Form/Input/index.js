// @flow
import React, { type Node, Component } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { media } from 'styled-bootstrap-grid';
import Base from '../../Base';
import Icon from '../../Icon';
import { colors } from '../../../globals';

type InputProps = {
  error?: Node,
  touched?: boolean,
  isValid?: boolean,
  placeholderRight?: boolean,
  label?: Node,
  onIconClick?: Function,
  type?: string,
  suggestions?: Array<Object>,
  onChange?: Function,
  autoCompleteProps?: Object,

  /** The name of the icon. */
  icon?: string,

  /** CSS class for the container around `<input />`. */
  className?: string
};

const getInputState = (props: InputProps): string => {
  if (props.isValid) {
    return colors.green;
  }

  if (props.error || props.isValid === false) {
    return colors.red;
  }

  return colors.charcoalGray;
};

const StyledInputWrapper = styled(Base.withComponent('div'))`
  position: relative;
`;

const StyledInputLine = styled(Base.withComponent('div'))`
  transition-timing-function: ease-out;
  transition-duration: 0.2s;
  transition-property: background, width;
  bottom: 0;
  left: 50%;
  pointer-events: none;
  height: 1px;
  z-index: 2;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  background-color: ${colors.charcoalGray};
  ${props => {
    if (props.disabled) {
      return;
    }

    if (props.touched && (!props.isValid || props.error)) {
      return `
        background-color: ${getInputState(props)};
        width: 100%;
      `;
    } else if (props.isValid) {
      return `
        width: 100%;
        background-color: ${getInputState(props)};
      `;
    }
  }}
`;

const StyledInputElement = styled(Base.withComponent('input'))`
  background-color: ${colors.alabaster};
  border: 0;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.12);
  color: ${props => props.disabled ? colors.silver : colors.charcoalGray};
  display: block;
  outline: 0;
  padding: 9px 20px;
  padding-right: ${props => props.icon ? '70px' : '20px'};
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 2;

  &:active,
  &:focus {
    outline: 0;

    & + ${StyledInputLine} {
      ${props => (!props.suggestions && !props.disabled) && `
        background-color: ${getInputState(props)};
        width: 100%;
      `}
    }
  }

  &::placeholder {
    color: ${props => props.disabled ? colors.silver : colors.warmGray};
    text-align: ${props => props.placeholderRight ? 'right' : 'left'};
  }
`;

class StyledInput extends Component<InputProps, { value: string }> {
  input: ?mixed;
  onChange: () => void;

  constructor(props: InputProps) {
    super(props);

    this.state = { value: '' };

    this.input = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: SyntheticInputEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }

    this.setState({ value });
  }

  render() {
    // don't let props.onChange overwrite this.onChange
    //
    // eslint-disable-next-line no-unused-vars
    const { onChange, ...props } = this.props;

    return (
      <StyledInputWrapper>
        <StyledInputElement
          innerRef={this.input}
          value={this.state.value}
          onChange={this.onChange}
          {...props}
        />
        <StyledInputLine value={this.state.value} {...this.props} />
      </StyledInputWrapper>
    );
  }
}

const Container = styled(Base)`
  position: relative;
`;

const StyledLabel = styled(Base)`
  color: ${colors.charcoalGray};
  margin-bottom: 5px;

  ${media.desktop`
    margin-bottom: 10px;
  `}
`;

const StyledErrorMessage = styled(Base)`
  font-size: 14px;
  color: ${colors.red};
  line-height: 2;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const StyledIconContainer = styled(Base)`
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

const StyledAutoSuggestion = styled(Base)`
  box-shadow: 0 11px 15px 0 rgba(0, 0, 0, 0.1);
  left: 0;
  padding-bottom: 5px;
  padding-top: 55px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &&& {
    background-color: ${colors.white};
  }

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
          renderInput={({ ref, value, ...inputProps }) => ( // eslint-disable-line no-unused-vars
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
  type: 'text',
  fontSize: 'body-xsmall',
};

export default Input;
