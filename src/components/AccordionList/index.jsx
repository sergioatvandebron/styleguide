import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Accordion from "../Accordion";
import "./style.scss";

class AccordionList extends PureComponent {
  render() {
    const {
      className,
      items,
      withNumber,
      open,
      disabled,
      ...props
    } = this.props;

    return (
      <ul className={classnames("Van-AccordionList", className)} {...props}>
        {items.map((item, index) => (
          <li
            key={`accordion-list-${item.description.length}`}
            className={classnames("Van-AccordionList-item", {
              "Van-AccordionList-item--withNumber": withNumber
            })}
          >
            {withNumber && (
              <span className="Van-AccordionList-number">{index + 1}</span>
            )}
            {withNumber &&
              index < items.length - 1 && (
                <span className="Van-AccordionList-dash" />
              )}

            <Accordion title={item.title} isOpen={open} disabled={disabled}>
              {item.description}
            </Accordion>
          </li>
        ))}
      </ul>
    );
  }
}

AccordionList.defaultProps = {
  className: "",
  items: [],
  withNumber: false,
  open: true,
  disabled: false
};

AccordionList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    })
  ),
  withNumber: PropTypes.bool,
  open: PropTypes.bool,
  disabled: PropTypes.bool
};

export default AccordionList;
