// import s from './PizzaItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slice';
import Buttons from 'components/Buttons/Buttons';
import s from './PizzaItem.module.css';

function PizzasItem({ id, title, description, price, image, quantity }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizzas.cart)
  const count = cart.find((item) => item.id === id);
  const quantityCart = count ? count.quantity : 0;
  return (
    <li className={s.item}>
      <h2 className={s.title}>{title}</h2>
      <img alt={title} src={image} />
      <p className={s.text}>{description}</p>
      <p>{price} UAH</p>

      {quantityCart <= 0 && <button
        onClick={() =>
          dispatch(
            addToCart({
              id,
              title,
              image,
              price,
            })
          )
        }
      >
        Add to Cart
      </button>}

      {/* <><button onClick={() => dispatch(decrementQuantity(id))}>-</button>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id,
              title,
              image,
              price,
            })
          )
        }
      >
        +
      </button> */}

      <Buttons id={id} quantity={quantity} /> 
    </li>
  );
}

export default PizzasItem;
