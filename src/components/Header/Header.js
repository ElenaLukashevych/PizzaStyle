import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

function Header() {
  const cart = useSelector(state => state.pizzas.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={s.logo} to="/">PizzaStyle </NavLink>
       <div className={s.box}> <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Pizza
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/Cart"
        >
          Cart
        </NavLink>{' '}
        <p>{getTotalQuantity() || 0}</p></div>
      </nav>
    </header>
  );
}

export default Header;
