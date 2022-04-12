// copied from CartItem
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './RecentPurchase.styles';

type Props = {
  item: CartItemType;
};

const RecentPurchaseItem: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div>
      <h2>{item.title}</h2>
      <div className='information'>
            <p><img src={item.image} alt={item.title} width="100%" height ="100%"/></p>
            <p><b>Price:</b> ${item.price}</p>
            <p><b>Amount:</b> {item.amount}</p>
            <p><b>Total:</b> ${(item.amount * item.price).toFixed(2)}</p>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Category:</b> {item.category}</p>
      </div>
    </div>

  </Wrapper>
);

export default RecentPurchaseItem;