import React, { type Node } from 'react';

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
  <div className="RadioGroup">
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
          if (checked) {
            onChange(child.props.value);
          }
        },
      });
    })}
  </div>
);

RadioGroup.defaultProps = {
  onChange: () => {},
};

export default RadioGroup;
