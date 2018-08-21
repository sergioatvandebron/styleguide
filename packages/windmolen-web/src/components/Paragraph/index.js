import Base from '../Base';
import styled from 'styled-components';

const Paragraph = styled(Base.withComponent('p'))`
  margin: ${props => props.margin || '18px 0'};
`;

export default Paragraph;
