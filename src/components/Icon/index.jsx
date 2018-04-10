/* eslint-disable react/no-danger */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isSVG from '../../utils/is-svg';

import './style.scss';

class Icon extends PureComponent {
  render() {
    const { className, source, animation, ...props } = this.props;

    if (!isSVG(source)) {
      return null;
    }

    return (
      <span
        className={classnames('Van-Icon', className)}
        dangerouslySetInnerHTML={{
          __html:
            animation === ''
              ? source
              : source.replace('<svg ', `<svg class="Van-u-animation--${animation}" `)
        }}
        {...props}
      />
    );
  }
}

Icon.defaultProps = {
  className: '',
  source: '',
  animation: ''
};

Icon.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  animation: PropTypes.oneOf(['', 'spin', 'pulse'])
};

export default Icon;
