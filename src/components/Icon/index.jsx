/* eslint-disable react/no-danger */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as ICONS from "../../assets/icons";
import "./style.scss";

class Icon extends PureComponent {
  getClass() {
    const classes = ["Van-Icon"];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return classes.join(" ").trim();
  }

  render() {
    const { className, source, ...props } = this.props;

    return (
      <span
        className={this.getClass()}
        dangerouslySetInnerHTML={{ __html: ICONS[source] }}
        {...props}
      />
    );
  }
}

Icon.defaultProps = {
  className: "",
  source: ""
};

Icon.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string
};

export default Icon;
