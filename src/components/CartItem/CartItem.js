import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slice';
import Buttons from '../Buttons';
import s from './CartItem.module.css';

function CartItem({ id, image, title, price, description, quantity = 0 }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      {' '}
      <h2>{title}</h2>
      <div className={s.box}>
        {' '}
        <img className={s.img} alt={title} src={image} />
      </div>
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
