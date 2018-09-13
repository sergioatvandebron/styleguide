import Base from '../Base';
import { colors } from '../../globals';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Block = styled(Base.withComponent('div'))`
  padding: 30px;
  border: ${props => props.outline ? `1px solid ${colors.white}` : '0'};

  ${media.desktop`
    padding: 50px;
  `}
`;

export default Block;
