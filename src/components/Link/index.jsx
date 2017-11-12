import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Link extends PureComponent {
  getClass(className) {
    const classes = ['Van-Link'];

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

Link.defaultProps = {
  className: '',
  type: '',
  children: '',
};

Link.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Link;
