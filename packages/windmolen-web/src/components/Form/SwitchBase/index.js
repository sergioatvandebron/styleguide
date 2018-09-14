import React, { type Node, Component } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icon';
import Base from '../../Base';
import Span from '../../Span';
import { colors } from '../../../globals';
import { px } from '../../../utils';

export type Props = {
  /**
   * Specify the type of input toggle.
   * Available options: checkbox, radio, toggle.
   */
  type: 'checkbox' | 'radio' | 'toggle',

  /** Used to specify the 'name' attribute. */
  name: string,

  /** Used to specify the 'value' attribute. */
  value: string,

  /** Specify a different variant. */
  variant: 'button-large' | 'button-small',

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

  /** The font size for the icon. */
  iconFontSize: string,
}

const getSwitchType = (type) => {
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

const variantStyles = {
  'button-small': {
    width: px(50),
    height: px(50),
    paddingLeft: px(7),
    paddingRight: px(7),
  },
  'button-large': {
    width: px(160),
    height: px(160),
    paddingLeft: px(20),
    paddingRight: px(20),
  },
}
const getVariantStyle = (variant, prop) => variantStyles[variant][prop];

const StyledIcon = styled(Icon)``;

const StyledLabel = styled(Span)`
  vertical-align: middle;
  ${props => {
    const margin = 15;
    return props.labelPlacement === 'start'
      ? `margin-right: ${margin}px;`
      : `margin-left: ${margin}px;`;
  }};
`;

const StyledSwitchBaseCore = styled(Span)`
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

const StyledSwitchBaseButtonWrapper = styled.div`
  display: inline-flex;
  padding-left: ${props => getVariantStyle(props.variant, 'paddingLeft')}
  padding-right: ${props => getVariantStyle(props.variant, 'paddingRight')}
`;

const StyledSwitchBaseButton = styled.div`
  transition-property: opacity;
  transition-duration: 0.33s;
  transition-timing-function: cubic-bezier(0.23, 0, 0.03, 1.01);
  box-shadow: 0 0 5px 0 rgba(51, 61, 71, 0.2);
  background-color: ${colors.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: ${props => getVariantStyle(props.variant, 'width')}
  height: ${props => getVariantStyle(props.variant, 'height')}
  opacity: ${props => props.checked ? 1 : 0.3};

  * {
    pointer-events: none;
  }

  ${StyledSwitchBaseCore} {
    flex-direction: column;
  }

  ${StyledLabel} {
    ${props => props.variant === 'button-small' && 'display: none;'}
    margin: 0;
    color: ${colors.charcoalGray};
  }

  &:active,
  &:focus {
    opacity: 1;
  }

  ${props => !props.checked && css`
    &:hover {
      cursor: pointer;
      opacity: 1;

      ${StyledLabel} {
        color: ${colors.warmGray};
      }

      ${StyledIcon} {
        background-position-y: -3em;
      }
    }
  `}
`;

const StyledSwitchBase = (props) => {
  const { style, ...other } = props;
  switch (props.variant) {
    case 'button-large':
    case 'button-small':
      return (
        <StyledSwitchBaseButtonWrapper {...other}>
          <StyledSwitchBaseButton style={style} {...other}>
            <StyledSwitchBaseCore {...other} />
          </StyledSwitchBaseButton>
        </StyledSwitchBaseButtonWrapper>
      );

    default:
      return <StyledSwitchBaseCore {...props} />;
  }
};

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

  const iconProps = {
    variant,
    name: icon,
    fontSize: props.iconFontSize !== null ? props.iconFontSize : undefined,
  }

  return props.type === 'toggle'
    ? <StyledToggle checked={props.checked} />
    : <StyledIcon {...iconProps} />;
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
      ...other
    } = this.props;

    const checked = this.isControlled ? checkedProp : this.state.checked;
    const switchType = getSwitchType(this.props.type);

    return (
      <StyledSwitchBase onClick={this.toggle} {...other} checked={checked}>
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

        <StyledSwitch checked={checked} {...other} />

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
  icon: null,
  iconVariant: 0,
  iconChecked: null,
  iconVariantChecked: null,
  iconFontSize: null,
  variant: null,
};

export default SwitchBase;
