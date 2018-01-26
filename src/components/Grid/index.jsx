import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Grid extends PureComponent {
  render() {
    const { className, children, align, justify, gutters, ...props } = this.props;

    return (
      <div
        className={classnames(
          'row',
          {
            [`align-items-${align}`]: align,
            [`justify-content-${justify}`]: justify,
            'no-gutters': !gutters
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
}

Grid.defaultProps = {
  className: '',
  align: undefined,
  justify: undefined,
  gutters: true,
  children: ''
};

Grid.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
  gutters: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Grid;
