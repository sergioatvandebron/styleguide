
// @flow
import React, { type Node, Component } from 'react';
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
  suggestions?: Array<Object>,

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
    } else if (props.value) {
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


class StyledInput extends Component {
  constructor(props:any) {
    super(props);

    this.state = {
      value: '',
    };

    this.input = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({
      ...this.state,
      value,
    });
  }

  render() {
    return (
      <StyledInputWrapper>
        <StyledInputElement
          innerRef={this.input}
          onChange={this.onChange}
          value={this.state.value}
          {...this.props}
        />
        <StyledInputLine value={this.state.value} {...this.props} />
      </StyledInputWrapper>
    )
  }
}
/*const StyledInput = (props) => {
};*/

const Container = Base.extend`
  position: relative;
`;

const StyledLabel = Base.extend`
  color: ${colors.charcoalGray};
  margin-bottom: 5px;

  ${media.desktop`
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
  type: 'text',
  fontSize: 'body-xsmall',
};

export default Input;
