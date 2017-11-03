import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

const Input = ({
  meta,
  input,
  className,
  ...props
}) => (
  <div>
    <input
      className={classnames('Van-Text-Input', className)}
      {...props}
      {...input}
    />
  </div>
);

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
