import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../redux/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Buttons({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.pizzas.cart);

  const count = cart.find(item => item.id === id);
  const quantity = count ? count.quantity : 0;
  const handleDecrement = id => {
    if (count.quantity <= 1) {
      dispatch(removeItem(id));
    } else dispatch(decrementQuantity(id));
  };

  return (
    <>
      {quantity > 0 && (
        <>
          <button onClick={() => handleDecrement(id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </>
      )}
    </>
  );
}

export default Buttons;
