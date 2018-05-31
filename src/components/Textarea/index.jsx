import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkIcon from '../../assets/icons/fa/check.svg';
import closeIcon from '../../assets/icons/fa/close.svg';
import Icon from '../Icon';
import './style.scss';

const Textarea = ({ meta, input, className, children, ...props }) => {
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
      <textarea className="Van-TextInput-input" {...props} {...input}>
        {children}
      </textarea>

      {touched && error && <Icon source={closeIcon} className="Van-TextInput-icon" />}

      {touched && !error && !warning && <Icon source={checkIcon} className="Van-TextInput-icon" />}

      {touched &&
        typeof error === 'string' && <div className="Van-TextInput-error-message">{error}</div>}
    </div>
  );
};

Textarea.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.string
};

Textarea.defaultProps = {
  meta: {},
  input: {},
  className: '',
  children: ''
};

export default Textarea;
