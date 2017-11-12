import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Span extends PureComponent {
  getClass(className) {
    const classes = ['Van-Span'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    return <span className={this.getClass()} {...props}>{this.props.children}</span>;
  }
}

Span.defaultProps = {
  className: '',
  children: '',
};

Span.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Span;
