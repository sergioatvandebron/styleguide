import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Link extends PureComponent {
  getClass(className) {
    let classes = ['Van-Link'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.type === 'secondary') {
      classes.push('Van-Link--secondary');
    }

    classes.push(className);

    return classes.join(' ').trim();
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    return <a className={this.getClass()} {...props}>{this.props.children}</a>;
  }
}

Link.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};

export default Link;
