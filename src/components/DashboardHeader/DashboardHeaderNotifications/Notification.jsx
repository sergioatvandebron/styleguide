import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import iconClose from '../../../assets/icons/fa/close.svg';

const Notification = ({ close, title, children }) => (
  <div className="Van-DashboardHeaderNotifications-notification">
    {close && (
      <div className="Van-DashboardHeaderNotifications-notificationClose" onClick={close}>
        <Icon source={iconClose} />
      </div>
    )}

    {title && <p className="Van-DashboardHeaderNotifications-title">{title}</p>}

    {children}
  </div>
);

Notification.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

Notification.defaultProps = {
  close: null,
};

export default Notification;
