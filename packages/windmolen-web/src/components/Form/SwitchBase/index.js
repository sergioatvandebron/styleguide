import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';
import Base from '../../Base';
import { colors } from '../../../globals';

type Props = {
  /**
   * Specify the type of input toggle.
   * Available options: checkbox, radio, toggle.
   */
  type: 'checkbox' | 'radio' | 'toggle',

  /** Used to specify the 'name' attribute. */
  name: string,

  /** Used to specify the 'value' attribute. */
  value: string,

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
  checked?: bool,

  /** The icon name for the default (unchecked) state. */
  icon?: string,

  /** The icon name for the active (checked) state. */
  iconChecked?: string,

  /** The icon variant for the default (unchecked) state. */
  iconVariant?: number,

  /** The icon variant for the active (checked) state. */
  iconVariantChecked?: number,
}

function getSwitchType(type) {
  switch (type) {
    case 'toggle':
    case 'checkbox':
      return 'checkbox';

    case 'radio':
      return 'radio'

    default:
      console.warn(`Unknown toggle type ${type}`);
  }
}


const StyledLabel = styled(Base.withComponent('span'))`
  vertical-align: middle;
  ${props => {
    const margin = 15;
    return props.labelPlacement === 'start'
      ? `margin-right: ${margin}px;`
      : `margin-left: ${margin}px;`;
  }};
`;

const StyledSwitchBase = styled.span`
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

const StyledToggleContainer = styled.div`
  transition: background 0.33s cubic-bezier(0.23, 0, 0.03, 1.01);
  background-color: ${props => props.checked ? colors.charcoalGray : colors.silver};
  width: 35px;
  height: 20px;
  border-radius: 12px;
  padding: 2px;
  position: relative;
`;
const StyledToggleCircle = styled.div`
  transition: left 0.33s cubic-bezier(0.23, 0, 0.03, 1.01);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${colors.white};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.checked ? 'calc(100% - 18px)' : '2px'};
`;

const StyledToggle = (props) => {
  return (
    <StyledToggleContainer {...props}>
      <StyledToggleCircle {...props} />
    </StyledToggleContainer>
  );
};

const StyledSwitch = (props) => {
  const switchType = getSwitchType(props.type);

  // If the regular version is specified but not the checked version then make
  // the checked version the regular version.
  const iconType = props.icon || switchType;
  const iconTypeChecked = (props.icon !== null && props.iconChecked === null)
    ? props.icon
    : (props.iconChecked || `${switchType}--checked`);
  const icon = props.checked ? iconTypeChecked : iconType;

  // If the regular version is specified but not the checked version then make
  // the checked version the regular version.
  const iconVariantChecked = props.iconVariantChecked === null
    ? props.iconVariant
    : props.iconVariantChecked;
  const variant = props.checked ? iconVariantChecked : props.iconVariant;

  return props.type === 'toggle'
    ? <StyledToggle checked={props.checked} />
    : <Icon name={icon} variant={variant} />;
}

class SwitchBase extends Component<Props> {
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

  render() {
    const {
      label,
      labelPlacement,
      inputRef,
      inputProps,
      name,
      value,
      checked: checkedProp,
      ...props
    } = this.props;

    const checked = this.isControlled ? checkedProp : this.state.checked;
    const switchType = getSwitchType(this.props.type);

    return (
      <StyledSwitchBase
        onClick={this.toggle}
        {...props}
      >
        <input
          type={switchType}
          ref={inputRef}
          checked={checked}
          onChange={this.toggle}
          name={name}
          value={value}
          {...inputProps}
        />
        {(labelPlacement === 'start' && label !== null) && (
          <StyledLabel labelPlacement={labelPlacement}>
            {label}
          </StyledLabel>
        )}
        <StyledSwitch checked={checked} {...props} />
        {(labelPlacement === 'end' && label !== null) && (
          <StyledLabel>
            {label}
          </StyledLabel>
        )}
      </StyledSwitchBase>
    );
  }
}

SwitchBase.defaultProps = {
  onChange: () => {},
  inputRef: () => {},
  label: null,
  labelPlacement: 'end',
  defaultChecked: false,
  checked: null,
  name: null,
  icon: null,
  iconVariant: 0,
  iconChecked: null,
  iconVariantChecked: null,
};

export default SwitchBase;
