import Base from '../Base';
import styled from 'styled-components';

const Paragraph = styled(Base.withComponent('p'))`
  margin: ${props => typeof props.margin !== 'undefined' ? props.margin : '18px 0'};
`;

export default Paragraph;
