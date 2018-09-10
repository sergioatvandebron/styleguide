// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import AnimateBase from '../Base';
import CountUp from 'react-countup';

type Props = {
  effect: string,
};

class AnimateBlock extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      withinViewport: false,
      shouldAnimate: true,
    };

    this.onViewportEnter = this.onViewportEnter.bind(this);
    this.renderBlock = this.renderBlock.bind(this);
  }

  onViewportEnter(shouldAnimate = true) {
    this.setState({
      ...this.state,
      withinViewport: true,
      shouldAnimate,
    });
  }

  renderBlock(effect) {
    const classes = {};

    if (this.state.withinViewport && this.state.shouldAnimate) {
      classes['animated'] = true;
      classes[effect] = true;
    }

    return (
      <div className={classNames(classes)}>
        {this.props.children}
      </div>
    );
  }

  render() {
    const {
      effect,
      ...props
    } = this.props;

    return (
      <AnimateBase onViewportEnter={this.onViewportEnter} {...props}>
        {this.renderBlock(effect)}
      </AnimateBase>
    )
  }
}

AnimateBlock.defaultProps = {
  effect: 'fadeInUp',
};

export default AnimateBlock;
