import { incrementQuantity, decrementQuantity} from '../../redux/slice';
import { useDispatch } from 'react-redux';
function Buttons(id, quantity) {
    const dispatch = useDispatch()

  
    return(
       <>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
       </>
    )
};

export default Buttons;