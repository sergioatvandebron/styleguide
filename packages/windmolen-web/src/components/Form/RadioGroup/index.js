import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
  name?: string,
  value?: string,
  onChange?: func,
  variant?: string,
  iconVariant?: number,
  iconVariantChecked?: number,
  iconFontSize?: string,
};

const StyledRadioGroup = styled.div``;

const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  variant,
  iconVariant,
  iconVariantChecked,
  iconFontSize,
}: Props) => (
  <StyledRadioGroup>
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      return React.cloneElement(child, {
        name,
        variant,
        iconVariant,
        iconVariantChecked,
        iconFontSize,
        checked: value === child.props.value,
        onChange: (checked) => {
          onChange(child.props.value);
        },
      });
    })}
  </StyledRadioGroup>
);

RadioGroup.defaultProps = {
  onChange: () => {},
};

export default RadioGroup;
