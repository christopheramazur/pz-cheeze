import { useQuery } from 'react-query';
import RecentPurchaseItem from './RecentPurchaseItem';
import { Wrapper } from './RecentPurchase.styles';
import { CartItemType } from '../App';
// Types
export type RecentItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
type Props = {
  cartItems: CartItemType[];
  // maybe add "buy again" ?
};

// async/await added via quickfix -- don't know enough about TS/React to gainsay doing without
const getRecentPurchase = async (): Promise<CartItemType[]> => (await fetch(`api/recent_purchase`)).json();

const RecentPurchase: React.FC<Props> = () => {

  // todo: handle loading & errors
  const { data, isLoading, error } = useQuery(
      'recent_purchase',
      getRecentPurchase
    );

  return (
    <Wrapper>
      <h2>Recent Purchases</h2>
      {data?.map(item => (
        <RecentPurchaseItem
          key={item.id}
          item={item} 
        />
      ))} 
    </Wrapper>
  );
};

export default RecentPurchase;