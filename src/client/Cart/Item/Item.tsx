import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";


// Types
import { CartItemType } from '../../App';

// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  // https://mui.com/components/dialogs/ -- add a dialog to the item wrapper
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <Wrapper>

      <img src={item.image} alt={item.title} onClick={() => setDialogVisible(true)} />
      <div>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
      </div>
      <Button
        onClick={() => handleAddToCart(item)}
        data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
      
      <Dialog open={dialogVisible} onClose={() => setDialogVisible(false)}>
        <DialogTitle>{item.title}</DialogTitle>
      </Dialog>
    </Wrapper>
  );
}
export default Item;
