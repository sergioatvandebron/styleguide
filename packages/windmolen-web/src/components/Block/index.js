import Base from '../Base';
import { colors } from '../../globals';
import { largeUp } from '../../utils';

const Block = Base.withComponent('div').extend`
  padding: 30px;
  border: ${props => props.outline ? `1px solid ${colors.white}` : '0'};

  ${largeUp('padding: 50px')}
`;

export default Block;
