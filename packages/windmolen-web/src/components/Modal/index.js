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
    top: 30px;
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

  ${media.desktop`
    padding: 20px;
  `}
`;

const StyledModal = styled.div`
  position: relative;
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const StyledLogo = styled(Image)`
  vertical-align: middle;
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;

  ${StyledLogo} {
    height: 15px;
  }

  ${media.desktop`
    height: 15px;
    left: 30px;
    transform: none;

    ${StyledLogo} {
      height: 20px;
    }
  `}
`;

const Modal = ({ children, ...props }: Props) => (
  <StyledModalContainer {...props}>
    <StyledModal>
      <div>
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
      </div>
      <ComponentGroup padding="large">
        {children}
      </ComponentGroup>
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
