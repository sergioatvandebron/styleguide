import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class InputCheckbox extends PureComponent {
  render() {
    const { className, ...props } = this.props;

    return (
      <span className={classnames('Van-InputCheckbox', className)}>
        <input type="checkbox" className="Van-InputCheckbox-input" {...props} />
        <span className="Van-InputCheckbox-styled" />
      </span>
    );
  }
}

InputCheckbox.defaultProps = {
  className: ''
};

InputCheckbox.propTypes = {
  className: PropTypes.string
};

export default InputCheckbox;
