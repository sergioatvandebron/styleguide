// @flow
import React from 'react';
import Base from '../Base';
import classNames from 'classnames';
import { media, Container, Row, Col } from 'styled-bootstrap-grid';

export type Props = {
  images?: array,
  flipped?: boolean,
};

const StyledContentBlock = Base.withComponent('div').extend`
  ${media.desktop`
    min-height: 540px;
    position: relative;
    display: flex;
    align-items: center;
  `}

  /* one image */
  .content-block--image-wrapper:first-child:nth-last-child(1) {
    ${media.desktop`
      max-height: 540px;
    `}
  }

  /* two images */
  .content-block--image-wrapper:first-child:nth-last-child(2),
  .content-block--image-wrapper:first-child:nth-last-child(2) ~ .content-block--image-wrapper {
    &:nth-child(1) {
      margin-top: -50px;
      width: 100%;
      padding-right: 50px;
      position: relative;
      z-index: 2;
      order: 2;

      ${media.desktop`
        margin-top: -80px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      `}
    }

    &:nth-child(2) {
      align-self: flex-end;
      width: 50%;
      height: auto;
      object-fit: cover;
      order: 1;

      ${media.desktop`
        width: 200px;
        height: 200px;
        object-fit: cover;
        //top: -120px;
      `}
    }
  }

  .content-block--images-container,
  .content-block--image-wrapper {
    &:before,
    &:after {
      content: '';
      display: table;
      width: 100%;
      clear: both;
    }
  }

  .content-block--image-wrapper {
    &:first-child img {
      box-shadow: -20px 14px 20px 0 rgba(0, 0, 0, 0.18);
      ${media.desktop`
        box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18);
      `}
    }
  }

  .content-block--images-container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    ${media.desktop`
      margin-bottom: 0;
      position: absolute;
      left: 50%;
      width: 50%;
    `}
  }

  .content-block--image {
    height: 100%;
    width: 100%;
    max-width: 100%;
    object-fit: cover;

    ${media.desktop`
      width: auto;
      float: ${props => props.flipped ? 'right' : 'left'};
    `}
  }
`;

const ContentBlock = ({
  images,
  flipped,
  children,
  ...props
}: Props) => {
  const classes = classNames({
    flipped: flipped,
  });

  return (
    <StyledContentBlock className={classes}>
      <div className="content-block--images-container">
        {images.map(({ src, ...props, }) => (
          <div className="content-block--image-wrapper">
            <img
              className="content-block--image"
              src={src}
              {...props}
            />
          </div>
        ))}
      </div>
      <Container>
        <Row>
          <Col className="content-block--content-wrapper" lg={5} mdPush={7}>
            {children}
          </Col>
        </Row>
      </Container>
    </StyledContentBlock>
  );
};

ContentBlock.defaultProps = {
  flipped: false,
  images: [],
};

export default ContentBlock;
