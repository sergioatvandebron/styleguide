import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class InputCheckbox extends PureComponent {
  render() {
    const { meta, input, className, ...props } = this.props;

    return (
      <span className={classnames('Van-InputCheckbox', className)}>
        <input type="checkbox" className="Van-InputCheckbox-input" {...props} {...input} />
        <span className="Van-InputCheckbox-styled" />
      </span>
    );
  }
}

InputCheckbox.defaultProps = {
  className: '',
  meta: {},
  input: {}
};

InputCheckbox.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

export default InputCheckbox;
