import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../../redux/slice';
import s from './Buttons.module.css';

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
    <div className={s.flex}>
      {quantity > 0 && (
        <>
          <button className={s.button} onClick={() => handleDecrement(id)}>
            -
          </button>
          <p className={s.text}>{quantity}</p>
          <button
            className={s.button}
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </button>
        </>
      )}
    </div>
  );
}

export default Buttons;
