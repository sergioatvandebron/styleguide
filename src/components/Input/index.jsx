import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

const Input = ({
  meta,
  input,
  className,
  ...props
}) => {
  const { error, warning, touched } = meta;
  const classNames = classnames(
    'Van-TextInput',
    className,
    { 'Van-TextInput--error': touched && error },
    { 'Van-TextInput--warning': touched && warning },
    { 'Van-TextInput--success': touched && !error && !warning }
  );

  return (
    <div className={classNames}>
      <input
        className='Van-TextInput-input'
        {...props}
        {...input}
      />

      {touched && typeof error === 'string' && <div className="Van-TextInput-error-message">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  className: PropTypes.string
};

Input.defaultProps = {
  meta: {},
  input: {},
  className: ''
};

export default Input;
