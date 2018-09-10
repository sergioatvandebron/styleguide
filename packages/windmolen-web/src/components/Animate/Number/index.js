// @flow
import React, { Component } from 'react';
import AnimateBase from '../Base';
import CountUp from 'react-countup';

type Props = {
  end: number,
  start?: number,
  /** Duration in seconds. */
  duration?: number,
  prefix?: string,
  suffix?: string,
};

class AnimateNumber extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      withinViewport: false,
      shouldAnimate: true,
    };

    this.onViewportEnter = this.onViewportEnter.bind(this);
    this.renderNumber = this.renderNumber.bind(this);
  }

  onViewportEnter(shouldAnimate = true) {
    this.setState({
      ...this.state,
      withinViewport: true,
      shouldAnimate,
    });
  }

  renderNumber(props) {
    const {
      prefix,
      suffix,
      end,
      start
    } = props;
    if (this.state.withinViewport && this.state.shouldAnimate) {
      return <CountUp {...props} />;
    } else if (this.state.withinViewport && !this.state.shouldAnimate) {
      return `${prefix}${end}${suffix}`;
    }

    return `${prefix}${start}${suffix}`;
  }

  render() {
    const {
      scrollableParentSelector,
      ...props
    } = this.props;

    return (
      <AnimateBase
        onViewportEnter={this.onViewportEnter}
        scrollableParentSelector={scrollableParentSelector}
      >
        {this.renderNumber(props)}
      </AnimateBase>
    )
  }
}

AnimateNumber.defaultProps = {
  duration: 1,
  decimal: ',',
};

export default AnimateNumber;
