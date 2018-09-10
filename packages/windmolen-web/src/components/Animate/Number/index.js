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

  renderNumber(start, end, suffix, prefix, duration) {
    if (this.state.withinViewport && this.state.shouldAnimate) {
      return (
        <CountUp
          start={start}
          end={end}
          prefix={prefix}
          suffix={suffix}
          duration={duration}
        />
      );
    } else if (this.state.withinViewport && !this.state.shouldAnimate) {
      return `${prefix}${end}${suffix}`;
    }

    return `${prefix}${start}${suffix}`;
  }

  render() {
    const {
      start,
      end,
      suffix,
      prefix,
      duration,
      ...props
    } = this.props;

    return (
      <AnimateBase onViewportEnter={this.onViewportEnter} {...props}>
        {this.renderNumber(start, end, suffix, prefix, duration)}
      </AnimateBase>
    )
  }
}

AnimateNumber.defaultProps = {
  start: 0,
  duration: 1,
  prefix: '',
  suffix: '',
};

export default AnimateNumber;
