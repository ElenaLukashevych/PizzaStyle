import { useSelector } from 'react-redux';
import {getPizza} from '../../redux/selectors';
import PizzaItem from '../PizzaItem'

function PizzasList() {
const pizzas = useSelector(getPizza);
// console.log(pizzas);
// console.log(cart);

 return(
    <ul>
        {pizzas && pizzas.map(({ id, title, description,price, image }) => (
                <PizzaItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    image={image}

                />
           ))} 
    </ul>
 )


};

export default PizzasList;