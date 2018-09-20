// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * The main scrollable element of the page. By default it will use the
   * 'window' object.
   */
  scrollableParentSelector?: string,

  /** An offset when the actual element should animate in. */
  offset?: number,

  /** An animation delay given in milliseconds. */
  delay?: number,

  animateOnce?: bool,
  onViewportEnter?: func,
};

const StyledAnimatedBase = styled.div`
  opacity: ${props => process.env.NODE_ENV === 'development' ? '1' : '0'};
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  ${props => props.shouldAnimateIn && 'opacity: 1;'}
`

class AnimateBase extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this._frameId;
    this._delayId;

    this.state = {
      withinViewport: false,
      shouldAnimate: true,
    };

    this.startLoop = this.startLoop.bind(this);
    this.stopLoop = this.stopLoop.bind(this);
    this.loop = this.loop.bind(this);

    this.getElementTop = this.getElementTop.bind(this);
    this.getScrollPos = this.getScrollPos.bind(this);
    this.getScrollableParentHeight = this.getScrollableParentHeight.bind(this);
    this.getViewportTop = this.getViewportTop.bind(this);
    this.getViewportBottom = this.getViewportBottom.bind(this);
    this.isInViewport = this.isInViewport.bind(this);
    this.isAboveViewport = this.isAboveViewport.bind(this);
    this.isBelowViewport = this.isBelowViewport.bind(this);
    this.getVisibility = this.getVisibility.bind(this);
  }

  componentDidMount() {
    const parentSelector = this.props.scrollableParentSelector;
    this.scrollableParent = (parentSelector ? document.querySelector(parentSelector) : window) || window;

    const { isAboveViewport } = this.getVisibility();
    if (isAboveViewport) {
      this.props.onViewportEnter(false);
      this.setState({
        ...this.state,
        withinViewport: true,
        shouldAnimate: false,
      });
    } else {
      this.startLoop();
    }
  }

  componentWillUnmount() {
    this.stopLoop();
  }

  startLoop() {
    if (!this._frameId) {
      this._frameId = window.requestAnimationFrame(this.loop);
    }
  }

  loop() {
    const { inViewport } = this.getVisibility();

    if (inViewport && this.props.animateOnce) {
      this.stopLoop();

      clearTimeout(this._delayId);
      this._delayId = setTimeout(() => {
        this.props.onViewportEnter();
        this.setState({
          ...this.state,
          withinViewport: true,
          shouldAnimate: true,
        });
      }, this.props.delay);
    } else {
      // Set up next iteration of the loop.
      this._frameId = window.requestAnimationFrame(this.loop)
    }
  }

  stopLoop() {
    clearTimeout(this._delayId);
    window.cancelAnimationFrame(this._frameId);
  }

  getElementTop(element) {
    let yPos = 0;
    while (element && element.offsetTop !== undefined && element.clientTop !== undefined) {
      yPos += (element.offsetTop + element.clientTop);
      element = element.offsetParent;
    }
    return yPos;
  }

  getScrollPos() {
    if (this.scrollableParent.pageYOffset !== undefined) {
      return this.scrollableParent.pageYOffset;
    }
    return this.scrollableParent.scrollTop;
  }

  getScrollableParentHeight() {
    if (this.scrollableParent.innerHeight !== undefined) {
      return this.scrollableParent.innerHeight;
    }
    return this.scrollableParent.clientHeight;
  }

  getViewportTop() {
    return this.getScrollPos() + this.props.offset;
  }

  getViewportBottom() {
    return this.getScrollPos() + this.getScrollableParentHeight() - this.props.offset;
  }

  isInViewport(y) {
    return y > this.getViewportTop() && y < this.getViewportBottom();
  }

  isAboveViewport(y) {
    return y < this.getViewportTop();
  }

  isBelowViewport(y) {
    return y > this.getViewportBottom();
  }

  inViewport(elementTop, elementBottom) {
    return this.isInViewport(elementTop) || this.isInViewport(elementBottom) ||
      (this.isAboveViewport(elementTop) && this.isBelowViewport(elementBottom));
  }

  getVisibility() {
    const elementTop = this.getElementTop(this.node) - this.getElementTop(this.scrollableParent);
    const elementBottom = elementTop + this.node.clientHeight;
    return {
      inViewport: this.inViewport(elementTop, elementBottom),
      isAboveViewport: this.isAboveViewport(elementBottom),
      isBelowViewport: this.isBelowViewport(elementTop),
    };
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <StyledAnimatedBase
        innerRef={(node) => { this.node = node }}
        className={className}
        {...props}
        shouldAnimateIn={this.state.withinViewport}
      >
        {this.props.children}
      </StyledAnimatedBase>
    )
  }
}

AnimateBase.defaultProps = {
  scrollableParentSelector: '',
  offset: 0,
  delay: 0,
  animateOnce: true,
  onViewportEnter: () => {},
};

export default AnimateBase;
