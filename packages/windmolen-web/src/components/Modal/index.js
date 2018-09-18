import React, { type Node } from 'react';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { colors } from '../../globals';
import Icon from '../Icon';
import ComponentGroup from '../ComponentGroup';
import logo from '../../assets/vdb-logo.svg';

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
  top: 30px;
  right: 30px;

  &:hover {
    background-position-y: -3em;
    cursor: pointer;
  }
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

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  user-select: none;
`;

const Modal = ({ children, ...props }: Props) => (
  <StyledModalContainer {...props}>
    <StyledModal>
      <div>
        {!props.hideHeader && (
          <StyledHeader>
          {!props.hideLogo && (
            <StyledLogoContainer>
            <img src={logo} alt="vandebron" />
          </StyledLogoContainer>
          )}
          {!props.hideCloseButton && (
            <StyledCloseButton name="close" onClick={props.onClose} />
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
