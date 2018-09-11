// @flow
import React, { Component } from 'react';
import AnimateBase from '../Base';
import CountUp from 'react-countup';

type Props = {
  /** Props given to this will be passed to the <CountUp /> */
  renderedItemProps?: object,
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
      renderedItemProps,
      ...props
    } = this.props;

    const itemProps = {
      start: 0,
      prefix: '',
      suffix: '',
      duration: 1,
      decimal: ',',
      ...renderedItemProps,
    };

    return (
      <AnimateBase onViewportEnter={this.onViewportEnter} {...props}>
        {this.renderNumber(itemProps)}
      </AnimateBase>
    )
  }
}

AnimateNumber.defaultProps = {};

export default AnimateNumber;
