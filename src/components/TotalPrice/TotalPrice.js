import { useSelector } from 'react-redux';

function TotalPrice() {
  const cart = useSelector(state => state.pizzas.cart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice };
  };

  return (
    <p>
      Total: <span>{getTotal().totalPrice} UAH</span>
    </p>
  );
}

export default TotalPrice;
