/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Icon';
import bell from '../../../assets/icons/fa/bell.svg';
import Notification from './Notification';

class DashboardHeaderNotifications extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  state = {
    isActive: false
  };

  toggle = () => {
    if (!this.props.children) {
      return;
    }

    this.setState({ isActive: !this.state.isActive });
  };

  hide = () => {
    if (!this.props.children) {
      return;
    }

    this.setState({ isActive: false });
  };

  render() {
    const { children } = this.props;
    const notifications = React.Children.count(children);
    const classes = classNames(
      'Van-DashboardHeaderNotifications',
      { 'Van-DashboardHeaderNotifications--active': this.state.isActive },
      { 'Van-DashboardHeaderNotifications--hasContent': notifications > 0 }
    );

    return (
      <div className={classes} onBlur={this.hide} tabIndex="0">
        <div className="Van-DashboardHeaderNotifications-toggle" onClick={this.toggle}>
          {notifications > 0 && (
            <div className="Van-DashboardHeaderNotifications-count">{notifications}</div>
          )}

          <Icon source={bell} />
        </div>

        {notifications > 0 &&
          this.state.isActive && (
            <div
              className="Van-DashboardHeaderNotifications-listWrapper"
              onMouseDown={ev => ev.preventDefault()}
            >
              {children}
            </div>
          )}
      </div>
    );
  }
}

DashboardHeaderNotifications.Notification = Notification;

export default DashboardHeaderNotifications;
