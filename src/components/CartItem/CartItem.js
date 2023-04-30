import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slice';
import Buttons from '../Buttons';
import s from './CartItem.module.css';

function CartItem({ id, image, title, price, description, quantity = 0 }) {
  const dispatch = useDispatch();

  return (
    <li>
      {' '}
      <h2>{title}</h2>
      <img alt={title} src={image} />
      <p>{description}</p>
      <p>{price}</p>
      <Buttons id={id} quantity={quantity} />
      <button className={s.button} onClick={() => dispatch(removeItem(id))}>
        Remove
      </button>
    </li>
  );
}
export default CartItem;
