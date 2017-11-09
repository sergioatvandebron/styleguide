import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Button extends Component {
  getClass() {
    let classes = ['Van-Button'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.type === 'primary') {
      classes.push('Van-Button--primary');
    } else if (this.props.type === 'info') {
      classes.push('Van-Button--info');
    } else if (this.props.type === 'warning') {
      classes.push('Van-Button--warning');
    } else if (this.props.type === 'danger') {
      classes.push('Van-Button--danger');
    } else if (this.props.type === 'success') {
      classes.push('Van-Button--success');
    }

    if (this.props.size === 'full') {
      classes.push('Van-Button--full');
    } else if (this.props.size === 'small') {
      classes.push('Van-Button--small');
    } else if (this.props.size === 'compact') {
      classes.push('Van-Button--compact');
    } else if (this.props.size === 'large') {
      classes.push('Van-Button--large');
    } else if (this.props.size === 'tiny') {
      classes.push('Van-Button--tiny');
    }

    if (this.props.inverted) {
      classes.push('Van-Button--inverted');
    }

    return classes.join(' ').trim();
  }

  render() {
    return (
      <button className={this.getClass()}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  inverted: PropTypes.bool
};

export default Button;
