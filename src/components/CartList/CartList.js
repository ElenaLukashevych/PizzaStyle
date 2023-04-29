import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

function CartList() {
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

        </ul>
    )
}
export default CartList;