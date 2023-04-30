import { useSelector } from 'react-redux';
import { getPizza } from '../../redux/selectors';
import PizzaItem from '../PizzaItem';
import s from './PizzaList.module.css';

function PizzasList() {
  const pizzas = useSelector(getPizza);
  // console.log(pizzas);
  // console.log(cart);

  return (
    <ul className={s.grid}>
      {pizzas &&
        pizzas.map(({ id, title, description, price, image, quantity }) => (
          <PizzaItem
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            image={image}
            quantity={quantity}
          />
        ))}
    </ul>
  );
}

export default PizzasList;
