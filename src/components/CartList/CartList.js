import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem';
import { remove } from '../../redux/slice';
import s from './CartList.module.css';

function CartList() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.pizzas.cart);

  return (
    <ul>
      <div className={s.grid}>
        {cart?.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <button className={s.button} onClick={() => dispatch(remove())}>
        {' '}
        Make an order
      </button>
    </ul>
  );
}
export default CartList;
