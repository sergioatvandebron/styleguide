import React, { type Node } from 'react';
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
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background:
    linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background:
    linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
`

const Modal = ({ children, ...props }: Props) => (
  <StyledModalContainer {...props}>
    <StyledModal>
      {!props.hideHeader && (
        <StyledHeader>
          {!props.hideLogo && (
            <StyledLogoContainer>
              <StyledLogo src={logo} alt="vandebron" />
            </StyledLogoContainer>
          )}
          {!props.hideCloseButton && (
            <StyledCloseButton
              name="close"
              onClick={props.onClose}
              fontSize="18px"
              desktopFontSize="24px"
            />
          )}
        </StyledHeader>
      )}
      <StyledContentWrapper>
        <ComponentGroup padding="large">
          {children}
        </ComponentGroup>
      </StyledContentWrapper>
    </StyledModal>
  </StyledModalContainer>
);

Modal.defaultProps = {
  onClose: () => {},
  hideHeader: false,
  hideLogo: false,
  hideCloseButton: false,
};

export default Modal;
