import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Store } from '../../hooks/StoreContext';
import { REACT_APP_API_URL } from '../../utils/apiConfig';

export default function CartScreen() {
  const { state, dispatch: contextDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  console.log(cartItems);
  return (
    <div>
      <Helmet>
        <title>Shopping Bag</title>
      </Helmet>
      <h2>Shopping bag</h2>
      <div>
        {cartItems.length === 0 ? (
          <div>
            Your bag is empty. <Link to="/">Back to shop</Link>
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <img
                  src={REACT_APP_API_URL + item.image}
                  alt={item.name}
                  height="80px"
                />{' '}
                <Link to={`/product/${item._id}`}>{item.name}</Link>{' '}
                <span>Size: {item.size}</span>{' '}
                <span>Quantity: {item.quantity}</span>{' '}
                <span>Price: €{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>
          Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items): €{' '}
          {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
        </h3>
      </div>
    </div>
  );
}
