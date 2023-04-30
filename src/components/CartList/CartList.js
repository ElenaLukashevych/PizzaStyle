import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import {remove} from '../../redux/slice';

function CartList() {
  const dispatch = useDispatch();

    const cart = useSelector((state) => state.pizzas.cart)

    return(
        <ul>
               {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
    <button onClick={() => dispatch(remove())}> Make an order</button>

        </ul>
    )
}
export default CartList;