import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

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
      xsPull,
      smPull,
      mdPull,
      lgPull,
      xsPush,
      smPush,
      mdPush,
      lgPush,
      className,
      children,
      ...props
    } = this.props;

    return (
      <div
        className={classnames(
          {
            [`col-xs-${xs}`]: typeof xs === "number" || typeof xs === "string",
            [`col-sm-${sm}`]: typeof sm === "number" || typeof sm === "string",
            [`col-md-${md}`]: typeof md === "number" || typeof md === "string",
            [`col-lg-${lg}`]: typeof lg === "number" || typeof lg === "string",

            [`col-xs-offset-${xsOffset}`]:
              typeof xsOffset === "number" || typeof xsOffset === "string",
            [`col-sm-offset-${smOffset}`]:
              typeof smOffset === "number" || typeof smOffset === "string",
            [`col-md-offset-${mdOffset}`]:
              typeof mdOffset === "number" || typeof mdOffset === "string",
            [`col-lg-offset-${lgOffset}`]:
              typeof lgOffset === "number" || typeof lgOffset === "string",

            [`col-xs-push-${xsPush}`]:
              typeof xsPush === "number" || typeof xsPush === "string",
            [`col-sm-push-${smPush}`]:
              typeof smPush === "number" || typeof smPush === "string",
            [`col-md-push-${mdPush}`]:
              typeof mdPush === "number" || typeof mdPush === "string",
            [`col-lg-push-${lgPush}`]:
              typeof lgPush === "number" || typeof lgPush === "string",

            [`col-xs-pull-${xsPull}`]:
              typeof xsPull === "number" || typeof xsPull === "string",
            [`col-sm-pull-${smPull}`]:
              typeof smPull === "number" || typeof smPull === "string",
            [`col-md-pull-${mdPull}`]:
              typeof mdPull === "number" || typeof mdPull === "string",
            [`col-lg-pull-${lgPull}`]:
              typeof lgPull === "number" || typeof lgPull === "string"
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
  className: "",
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xsOffset: undefined,
  smOffset: undefined,
  mdOffset: undefined,
  lgOffset: undefined,
  xsPull: undefined,
  smPull: undefined,
  mdPull: undefined,
  lgPull: undefined,
  xsPush: undefined,
  smPush: undefined,
  mdPush: undefined,
  lgPush: undefined,
  children: ""
};

Col.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgPush: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgPull: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Col;
