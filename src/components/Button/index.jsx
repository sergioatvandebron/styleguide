import React, { Component } from 'react';
import './style.css';

// style
// size
// color

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

    return classes.join(' ');
  }

  render() {
    return (
      <button className={this.getClass()}>{this.props.children}</button>
    );
  }
}

export default Button;
