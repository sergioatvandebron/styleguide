import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Paragraph extends PureComponent {
  render() {
    const {
      className,
      children,
      ...props
    } = this.props;

    return (
      <p
        className={classnames('Van-Paragraph', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
}

Paragraph.defaultProps = {
  className: '',
  children: '',
};

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Paragraph;
