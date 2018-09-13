import React from 'react';

const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  variant,
  iconVariant,
  iconVariantChecked,
  iconFontSize,
}) => {
  return (
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
};

RadioGroup.defaultProps = {
  onChange: () => {},
};

export default RadioGroup;
