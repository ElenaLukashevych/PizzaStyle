import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartList from '../../components/CartList'


function CartPage() {
    const cart = useSelector((state) => state.pizzas.cart)

    return(
       <>  {cart.length <= 0 ? (
        <p>Please, choose pizza <Link to='/'>here</Link></p>
      ) : (

        <CartList/>
      )}
       
       <ul>


       </ul>
       </>
    )
    
    };
    
    export default CartPage;