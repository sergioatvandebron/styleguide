import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';
import './styles.scss';

class DashboardMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isStartShadowVisible: false,
      isEndShadowVisible: false
    };
  }

  componentDidMount() {
    if (this.navRef instanceof HTMLElement) {
      this.handleShadowVisibility(this.navRef);
    }
  }

  setRef(elem) {
    this.navRef = elem;
  }

  handleShadowVisibility = target => {
    const maxScrollStartReached = target.scrollLeft <= 1;
    const maxScrollEndReached = target.scrollLeft >= target.scrollWidth - target.offsetWidth;

    this.setState({
      isStartShadowVisible: !maxScrollStartReached,
      isEndShadowVisible: !maxScrollEndReached
    });
  };

  render() {
    const { isStartShadowVisible, isEndShadowVisible } = this.state;
    const { className, children, ...props } = this.props;

    return (
      <nav
        className={classnames('Van-DashboardMenu', className, {
          'Van-DashboardMenu--startShadow': isStartShadowVisible,
          'Van-DashboardMenu--endShadow': isEndShadowVisible
        })}
        {...props}
      >
        <ul
          className="Van-DashboardMenu-nav"
          onScroll={e => this.handleShadowVisibility(e.target)}
          ref={elem => this.setRef(elem)}
        >
          {children}
        </ul>
      </nav>
    );
  }
}

DashboardMenu.defaultProps = {
  children: null,
  className: null
};

DashboardMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DashboardMenu.Item = Item;

export default DashboardMenu;
