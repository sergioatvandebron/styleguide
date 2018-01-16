/* eslint-disable react/no-danger */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isSVG from 'is-svg';

import './style.scss';

class Icon extends PureComponent {
  render() {
    const { className, source, ...props } = this.props;

    if (!isSVG(source)) {
      return null;
    }

    return (
      <span
        className={classnames('Van-Icon', className)}
        dangerouslySetInnerHTML={{ __html: source }}
        {...props}
      />
    );
  }
}

Icon.defaultProps = {
  className: '',
  source: ''
};

Icon.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string
};

export default Icon;
