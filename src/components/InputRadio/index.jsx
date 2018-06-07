import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class InputRadio extends PureComponent {
  render() {
    const { meta, input, className, ...props } = this.props;

    return (
      <span className={classnames('Van-InputRadio', className)}>
        <input type="radio" className="Van-InputRadio-input" {...props} {...input} />
        <span className="Van-InputRadio-styled" />
      </span>
    );
  }
}

InputRadio.defaultProps = {
  className: '',
  meta: {},
  input: {}
};

InputRadio.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

export default InputRadio;
