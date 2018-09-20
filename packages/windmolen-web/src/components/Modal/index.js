import React, { type Node, Component } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { colors } from '../../globals';
import Icon from '../Icon';
import ComponentGroup from '../ComponentGroup';
import logo from '../../assets/vdb-logo.svg';
import Image from '../Image';

type Props = {
  /** The children that will be rendered within the modal. */
  children: Node,

  /** When specified, the header button will not be rendered. */
  hideHeader?: bool,

  /** When specified, the logo button will not be rendered. */
  hideLogo?: bool,

  /** When specified, the close button will not be rendered. */
  hideCloseButton?: bool,

  /** Callback function when a user clicks on the close button. */
  onClose?: func,
}

const StyledCloseButton = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 20px;

  &:hover {
    background-position-y: -3em;
    cursor: pointer;
  }

  ${media.desktop`
    top: 34px;
    right: 30px;
  `}
`;

const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(51, 61, 71, 0.5);
  z-index: 1000;
  text-align: center;
  overflow: hidden;

  ${media.desktop`
    padding: 20px;
  `}
`;

const StyledModal = styled.div`
  position: relative;
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  min-height: 65px;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  transition: box-shadow 0.3s ease-in-out;

  ${props => props.isScrolling && 'box-shadow: 0 0 8px 0 rgba(51, 61, 71, 0.12);'}

  ${media.desktop`
    min-height: 90px;
  `}
`;

const StyledLogo = styled(Image)`
  vertical-align: middle;
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;

  ${StyledLogo} {
    height: 15px;
  }

  ${media.desktop`
    top: 30px;
    left: 30px;
    transform: none;

    ${StyledLogo} {
      height: 20px;
    }
  `}
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

class Modal extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this._frameId;

    this.state = {
      isScrolling: false,
    };

    this.startLoop = this.startLoop.bind(this);
    this.stopLoop = this.stopLoop.bind(this);
    this.loop = this.loop.bind(this);
  }

  componentDidMount() {
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
    if (this.contentWrapper) {
      const isScrolling = this.contentWrapper.scrollTop > 0;
      if (isScrolling !== this.state.isScrolling) {
        this.setState({ isScrolling });
      }
    }

    // Set up next iteration of the loop.
    this._frameId = window.requestAnimationFrame(this.loop)
  }

  stopLoop() {
    window.cancelAnimationFrame(this._frameId);
  }

  render() {
    return (
      <StyledModalContainer {...this.props} className={classNames('fadeIn', this.props.className)}>
        <StyledModal className="fadeInUp">
          {!this.props.hideHeader && (
            <StyledHeader isScrolling={this.state.isScrolling}>
              {!this.props.hideLogo && (
                <StyledLogoContainer>
                  <StyledLogo src={logo} alt="vandebron" />
                </StyledLogoContainer>
              )}
              {!this.props.hideCloseButton && (
                <StyledCloseButton
                  name="close"
                  onClick={this.props.onClose}
                  fontSize="18px"
                  desktopFontSize="24px"
                />
              )}
            </StyledHeader>
          )}
          <StyledContentWrapper innerRef={(node) => { this.contentWrapper = node; }}>
            <ComponentGroup padding="large">
              {this.props.children}
            </ComponentGroup>
          </StyledContentWrapper>
        </StyledModal>
      </StyledModalContainer>
    );
  }
}

Modal.defaultProps = {
  onClose: () => {},
  hideHeader: false,
  hideLogo: false,
  hideCloseButton: false,
};

export default Modal;
