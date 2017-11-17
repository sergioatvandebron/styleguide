import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

// TODO: https://getbootstrap.com/docs/3.3/css/#responsive-utilities-classes

class Col extends PureComponent {
  render() {
    const {
      xs,
      sm,
      md,
      lg,
      xsOffset,
      smOffset,
      mdOffset,
      lgOffset,
      className,
      children,
      ...props
    } = this.props;

    return (
      <div
        className={classnames({
          [`col-xs-${xs}`]: typeof xs === 'number',
          [`col-sm-${sm}`]: typeof sm === 'number',
          [`col-md-${md}`]: typeof md === 'number',
          [`col-lg-${lg}`]: typeof lg === 'number',

          [`col-xs-offset-${xsOffset}`]: typeof xsOffset === 'number',
          [`col-sm-offset-${smOffset}`]: typeof smOffset === 'number',
          [`col-md-offset-${mdOffset}`]: typeof mdOffset === 'number',
          [`col-lg-offset-${lgOffset}`]: typeof lgOffset === 'number',
        }, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
}

Col.defaultProps = {
  className: '',
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xsOffset: undefined,
  smOffset: undefined,
  mdOffset: undefined,
  lgOffset: undefined,
  children: '',
};

Col.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Col;
