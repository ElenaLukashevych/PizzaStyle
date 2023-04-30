import { removeItem} from '../../redux/slice';
import { useDispatch } from 'react-redux';
import Buttons from '../Buttons';

function CartItem({id, image, title, price, description, quantity=0}) {
    const dispatch = useDispatch()

    return(
        <li> <h2>{title} {quantity}</h2>
        <img alt={title} src={image}/>
        <p>{description}</p>
        <p>{price}</p>
        
        {/* <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button> */}
        <button
          
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>

        <Buttons id={id} quantity={quantity} />
        </li>
    )
}
export default CartItem;