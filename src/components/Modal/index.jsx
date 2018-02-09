import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Modal as ModalBootstrap } from 'react-bootstrap';
import './style.scss';

class Modal extends ModalBootstrap {
  render() {
    const { children, className, size, ...props } = this.props;

    return (
      <ModalBootstrap className={classnames('Van-Modal', className)} bsSize={size} {...props}>
        {children}
      </ModalBootstrap>
    );
  }
}

Modal.defaultProps = {
  show: false,
  size: 'large',
  onEnter: undefined,
  onEntering: undefined,
  onEntered: undefined,
  onHide: undefined,
  onExit: undefined,
  onExiting: undefined,
  onExited: undefined,
  keyboard: true,
  backdrop: true,
  className: '',
  children: ''
};

Modal.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'large', 'sm', 'small']),
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onHide: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
