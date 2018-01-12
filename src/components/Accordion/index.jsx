import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

import './styles.scss';

class Accordion extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.updateAccordionState({
      isOpen: this.props.isOpen
    });
  }

  componentWillReceiveProps(nexProps) {
    this.updateAccordionState({
      isOpen: nexProps.isOpen
    });
  }

  getIconMarkup() {
    return this.state.isOpen ? <Icon source="angleUp" /> : <Icon source="angleDown" />;
  }

  updateAccordionState(state) {
    this.setState(state);
  }

  toggle() {
    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    const { title, children, disabled } = this.props;

    return (
      <div
        className={classnames('Van-Accordion', {
          'Van-Accordion--disabled': disabled,
          'Van-Accordion--open': this.state.isOpen
        })}
      >
        <span onClick={this.toggle} className="Van-Accordion-title">
          {title}

          {!disabled && this.getIconMarkup()}
        </span>

        <div className="Van-Accordion-content">{children}</div>
      </div>
    );
  }
}

Accordion.defaultProps = {
  isOpen: false,
  disabled: false
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Accordion;
