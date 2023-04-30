import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartList from '../../components/CartList';
import TotalPrice from '../../components/TotalPrice';
import s from './CartPage.module.css';

function CartPage() {
  const cart = useSelector(state => state.pizzas.cart);

  return (
    <>
      {' '}
      {cart.length <= 0 ? (
        <p className={s.text}>
          Please, choose pizza{' '}
          <Link to="/">
            <span className={s.accent}>here</span>
          </Link>
        </p>
      ) : (
        <>
          <CartList />
          <TotalPrice />
        </>
      )}
    </>
  );
}

export default CartPage;
