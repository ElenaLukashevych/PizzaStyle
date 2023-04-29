// import s from './PizzaItem.module.css';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/slice'

function PizzasItem({id, title, description, price, image }) {
    const dispatch = useDispatch()

    return(
        <li>
        <h2>{title}</h2>
        <img alt={title} src={image}/>
        <p>{description}</p>
        <p>{price}</p>
        <button 
  onClick={() => 
    dispatch(addToCart({
      id, title, image, price
    }))
  }>Add to Cart
</button>
<button>-</button>
        <button>+</button>
        </li>
    )
    
    };
    
    export default PizzasItem;