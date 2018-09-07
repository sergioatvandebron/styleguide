import React, { type Node, Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  scrollableParentSelector?: string,
  offset?: number,
}

class AnimateBase extends Component {
  constructor(props:any) {
    super(props);
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
    this.scrollableParent = parentSelector ? document.querySelector(parentSelector) : window;

    this.startLoop();
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
    this.withinViewport = this.getVisibility();

    // Set up next iteration of the loop
    this._frameId = window.requestAnimationFrame(this.loop)
  }

  stopLoop() {
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
    return y >= this.getViewportTop() && y <= this.getViewportBottom();
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
    const elementTop = this.getElementTop(this.viewportElement) - this.getElementTop(this.scrollableParent);
    const elementBottom = elementTop + this.viewportElement.clientHeight;
    return this.inViewport(elementTop, elementBottom);
  }

  render() {
    return (
      <div className="AnimateBase">
        Animate Base.
      </div>
    )
  }
}

AnimateBase.defaultProps = {
  scrollableParentSelector: '',
  offset: 0,
};

export default AnimateBase;
