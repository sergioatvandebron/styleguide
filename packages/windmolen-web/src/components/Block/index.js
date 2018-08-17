import Base from '../Base';
import { largeUp } from '../../utils';

const Block = Base.withComponent('div').extend`
  padding: 30px;

  ${largeUp('padding: 50px')}
`;

export default Block;
