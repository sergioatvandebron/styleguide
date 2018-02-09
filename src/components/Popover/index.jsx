import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { OverlayTrigger, Popover as BootstrapPopover } from 'react-bootstrap';
import './style.scss';

class Popover extends PureComponent {
  getPopoverContent() {
    const { className, id, title, content, ...props } = this.props;

    return (
      <BootstrapPopover
        className={classnames('Van-Popover', className)}
        id={id}
        title={title}
        {...props}
      >
        {content}
      </BootstrapPopover>
    );
  }

  render() {
    const { trigger, placement, children } = this.props;
    let triggerCopy = trigger;

    if (triggerCopy === 'hover') {
      triggerCopy = ['hover', 'focus'];
    }

    return (
      <OverlayTrigger
        trigger={triggerCopy}
        placement={placement}
        overlay={this.getPopoverContent()}
      >
        {children}
      </OverlayTrigger>
    );
  }
}

Popover.defaultProps = {
  id: '',
  className: '',
  title: '',
  content: '',
  children: '',
  placement: 'right',
  trigger: 'hover'
};

Popover.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  trigger: PropTypes.oneOf(['hover', 'focus', 'click'])
};

export default Popover;
