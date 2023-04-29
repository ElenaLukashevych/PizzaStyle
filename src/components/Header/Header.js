import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    const cart = useSelector((state) => state.pizzas.cart)
    console.log(cart);
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }
    console.log(getTotalQuantity());
    return (
       <header>
        <nav>
        <NavLink to='/' >PizzaStyle </NavLink>
        <NavLink to='/'>Pizza</NavLink>
        <NavLink to='/Cart'>Cart</NavLink>  <p>{getTotalQuantity() || 0}</p>
        </nav>
       </header>
    )
};

export default Header;