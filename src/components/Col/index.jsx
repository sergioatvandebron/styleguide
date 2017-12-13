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
          [`col-xs-${xs}`]: (typeof xs === 'number' || typeof xs === 'string'),
          [`col-sm-${sm}`]: (typeof sm === 'number' || typeof sm === 'string'),
          [`col-md-${md}`]: (typeof md === 'number' || typeof md === 'string'),
          [`col-lg-${lg}`]: (typeof lg === 'number' || typeof lg === 'string'),

          [`col-xs-offset-${xsOffset}`]: (typeof xsOffset === 'number' || typeof xsOffset === 'string'),
          [`col-sm-offset-${smOffset}`]: (typeof smOffset === 'number' || typeof smOffset === 'string'),
          [`col-md-offset-${mdOffset}`]: (typeof mdOffset === 'number' || typeof mdOffset === 'string'),
          [`col-lg-offset-${lgOffset}`]: (typeof lgOffset === 'number' || typeof lgOffset === 'string'),
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
  xs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  xsOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  smOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  mdOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  lgOffset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default Col;
