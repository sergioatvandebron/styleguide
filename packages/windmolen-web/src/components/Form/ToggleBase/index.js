import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';
import Base from '../../Base';

type Props = {
  /** Specify the type of input toggle. */
  type: 'checkbox' | 'radio' | 'toggle',

  /** A name to group toggles (mainly used for radios). */
  name?: string,

  /** A callback function when the 'checked' value has been changed. */
  onChange?: func,

  /** Wether the toggle should be checked by default. */
  defaultChecked?: bool,

  /** A callback function for the input ref. */
  inputRef?: func,

  /** An object of custom props being passed to the input. */
  inputProps?: object,

  /** The label for the input. */
  label?: string,

  /** The placement of the label relative to the input. */
  labelPlacement?: 'start' | 'end',

  /** Make a controlled toggle by specifying the 'checked' property manually. */
  checked: bool,

  /** Specify the 'name' attribute. */
  name: string,
}

const StyledLabel = styled(Base.withComponent('span'))`
  vertical-align: middle;
  ${props => props.labelPlacement === 'start' ? 'margin-right: 10px;' : 'margin-left: 10px;'}
`;

const StyledToggleBase = styled.span`
  display: inline-flex;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

class ToggleBase extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.isControlled = props.checked !== null;
    if (!this.isControlled) {
      this.state.checked = typeof props.defaultChecked !== 'undefined' ? props.defaultChecked : false;
    }

    this.toggle = this.toggle.bind(this);
    this.getToggleType = this.getToggleType.bind(this);
  }

  toggle() {
    const checked = !this.state.checked;
    this.setState({
      ...this.state,
      checked,
    });

    // Give onChange feedback to the parent.
    this.props.onChange(checked);
  }

  getToggleType(type) {
    switch (type) {
      case 'toggle':
      case 'checkbox':
        return 'checkbox';

      case 'radio':
        return 'radio'

      default:
        console.log(`Unknown toggle type ${type}`);
    }
  }

  render() {
    const {
      label,
      labelPlacement,
      inputRef,
      inputProps,
      name,
      value,
      ...props
    } = this.props;

    const checked = this.isControlled ? this.props.checked : this.state.checked;
    const toggleType = this.getToggleType(this.props.type);

    return (
      <StyledToggleBase
        onClick={this.toggle}
        {...props}
      >
        <input
          type={toggleType}
          ref={inputRef}
          checked={checked}
          onChange={this.toggle}
          name={name}
          value={value}
          {...inputProps}
        />
        {labelPlacement === 'start' && (
          <StyledLabel labelPlacement={labelPlacement}>
            {label}
          </StyledLabel>
        )}
        <Icon name={checked ? `${toggleType}--checked` : toggleType} />
        {labelPlacement === 'end' && (
          <StyledLabel>
            {label}
          </StyledLabel>
        )}
      </StyledToggleBase>
    );
  }
}

ToggleBase.defaultProps = {
  onChange: () => {},
  inputRef: () => {},
  label: '',
  labelPlacement: 'end',
  defaultChecked: false,
  checked: null,
  name: null,
};

export default ToggleBase;
