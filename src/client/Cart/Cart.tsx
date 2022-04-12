import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import { Button } from '@material-ui/core';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  // collect item data as JSON & POST with collection to backend
  const purchaseItemsInCart = (items: CartItemType[]) => {
    const payload = JSON.stringify(items);
    console.log("Items sent to purchase: \n", payload)
    
    const purchaseRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    }

    // TBD: error handling, async
    console.log(fetch('api/submit_purchase', purchaseRequest));
  }
  
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>

      <Button 
        onClick={() => purchaseItemsInCart(cartItems)}>
        <b>Purchase</b>
      </Button>
    </Wrapper>
  );
};

export default Cart;
