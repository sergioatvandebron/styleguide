import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Label extends PureComponent {
  getClass(className) {
    const classes = ["Van-Label"];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(" ");
  }

  render() {
    return <label className={this.getClass()}>{this.props.children}</label>;
  }
}

Label.defaultProps = {
  className: "",
  children: ""
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Label;
