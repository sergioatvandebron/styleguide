import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Switch = ({ input, meta, ...props }) => (
  <div className="Van-Switch">
    <input
      {...input}
      {...props}
      type="checkbox"
      className="Van-Switch-input"
      id={input.name || props.id}
      name={input.name || props.name}
    />
    <label htmlFor={input.name || props.id} className="Van-Switch-wrapper">
      <div className="Van-Switch-toggle" />
      <div className="Van-Switch-label Van-Switch-label--on">Ja</div>
      <div className="Van-Switch-label Van-Switch-label--off">Nee</div>
    </label>
  </div>
);

Switch.defaultProps = {
  meta: {},
  input: {},
  id: '',
  name: '',
};

Switch.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Switch;
