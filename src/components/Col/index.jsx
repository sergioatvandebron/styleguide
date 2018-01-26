import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const ALLOWED_ORDERS = ['first', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

class Col extends PureComponent {
  render() {
    const {
      xs,
      sm,
      md,
      lg,
      xl,
      xsOffset,
      smOffset,
      mdOffset,
      lgOffset,
      xlOffset,
      xsPull,
      smPull,
      mdPull,
      lgPull,
      xlPull,
      xsPush,
      smPush,
      mdPush,
      lgPush,
      xlPush,
      align,
      order,
      xsOrder,
      smOrder,
      mdOrder,
      lgOrder,
      xlOrder,
      className,
      children,
      ...props
    } = this.props;

    return (
      <div
        className={classnames(
          {
            col: !xs && !sm && !md && !lg && !xl,

            [`col-${xs}`]: xs,
            [`col-sm-${sm}`]: sm,
            [`col-md-${md}`]: md,
            [`col-lg-${lg}`]: lg,
            [`col-xl-${xl}`]: xl,

            [`col-offset-${xsOffset}`]: xsOffset,
            [`col-sm-offset-${smOffset}`]: smOffset,
            [`col-md-offset-${mdOffset}`]: mdOffset,
            [`col-lg-offset-${lgOffset}`]: lgOffset,
            [`col-xl-offset-${xlOffset}`]: xlOffset,

            [`col-push-${xsPush}`]: xsPush,
            [`col-sm-push-${smPush}`]: smPush,
            [`col-md-push-${mdPush}`]: mdPush,
            [`col-lg-push-${lgPush}`]: lgPush,
            [`col-xl-push-${xlPush}`]: xlPush,

            [`col-pull-${xsPull}`]: xsPull,
            [`col-sm-pull-${smPull}`]: smPull,
            [`col-md-pull-${mdPull}`]: mdPull,
            [`col-lg-pull-${lgPull}`]: lgPull,
            [`col-xl-pull-${xlPull}`]: xlPull,

            [`align-self-${align}`]: align,

            [`order-${order}`]: order,
            [`order-xs-${xsOrder}`]: xsOrder,
            [`order-sm-${smOrder}`]: smOrder,
            [`order-md-${mdOrder}`]: mdOrder,
            [`order-lg-${lgOrder}`]: lgOrder,
            [`order-xl-${xlOrder}`]: xlOrder
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

Col.defaultProps = {
  className: '',
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xsOffset: undefined,
  smOffset: undefined,
  mdOffset: undefined,
  lgOffset: undefined,
  xlOffset: undefined,
  xsPull: undefined,
  smPull: undefined,
  mdPull: undefined,
  lgPull: undefined,
  xlPull: undefined,
  xsPush: undefined,
  smPush: undefined,
  mdPush: undefined,
  lgPush: undefined,
  xlPush: undefined,
  align: undefined,
  order: undefined,
  xsOrder: undefined,
  smOrder: undefined,
  mdOrder: undefined,
  lgOrder: undefined,
  xlOrder: undefined,
  children: ''
};

Col.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xlOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xlPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xlPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  order: PropTypes.oneOf(ALLOWED_ORDERS),
  xsOrder: PropTypes.oneOf(ALLOWED_ORDERS),
  smOrder: PropTypes.oneOf(ALLOWED_ORDERS),
  mdOrder: PropTypes.oneOf(ALLOWED_ORDERS),
  lgOrder: PropTypes.oneOf(ALLOWED_ORDERS),
  xlOrder: PropTypes.oneOf(ALLOWED_ORDERS),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Col;
