import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

class Grid extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <div className={classnames("row", className)} {...props}>
        {children}
      </div>
    );
  }
}

Grid.defaultProps = {
  className: "",
  children: ""
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Grid;
