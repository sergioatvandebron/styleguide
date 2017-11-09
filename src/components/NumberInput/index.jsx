import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class NumberInput extends React.Component {
  static defaultProps = {
    input: {},
    meta: {},
    step: 1
  };

  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    step: PropTypes.number
  };

  handleClick = (dir) => {
    const { step = 1 } = this.props;
    const val = this.input.value.length ? parseInt(this.input.value, 10) : 0;

    this.input.value = dir === 'up'
      ? val + step
      : val - step;
  }

  render() {
    const {
      input,
      meta: { error, touched },
      ...props
    } = this.props;
    const className = classnames(
      'Van-NumberInput',
      { 'Van-NumberInput--error': touched && error }
    );

    return (
      <div className={className}>
        <button type="button" className="Van-NumberInput-ctrl Van-NumberInput-ctrl--down" onClick={() => this.handleClick('down')}>-</button>
        <button type="button" className="Van-NumberInput-ctrl Van-NumberInput-ctrl--up" onClick={() => this.handleClick('up')}>+</button>

        <input
          {...props}
          {...input}
          ref={(numinput) => { this.input = numinput; }}
          type="number"
          className="Van-NumberInput-input"
        />
      </div>
    );
  }
}

export default NumberInput;
