import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Store } from '../../hooks/StoreContext';
import { REACT_APP_API_URL } from '../../utils/apiConfig';
import styles from './ShoppingBag.module.css';
import { ShoppingBagTotal } from './components/ShoppingBagTotal';
import { QuantityCounter } from '../../components/QuantityCounter/QuantityCounter';

export default function CartScreen({ item }) {
  const { state, dispatch: contextDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  //console.log(cartItems);

  const removeFromCart = (item) => {
    contextDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  return (
    <div className={styles.main_container}>
      <Helmet>
        <title>Shopping Bag</title>
      </Helmet>
      <h1>Shopping bag</h1>
      <div>
        {cartItems.length === 0 ? (
          <div className={styles.bag_empty_container}>
            Your bag is empty. <Link to="/">Back to shop</Link>
          </div>
        ) : (
          <div className={styles.card_container}>
            <ul className={styles.list_product_container}>
              {cartItems.map((item) => (
                <li
                  key={`${item._id}_${item.size}`}
                  className={styles.product_container}
                >
                  <img
                    src={REACT_APP_API_URL + item.image}
                    alt={item.name}
                    className={styles.image_container}
                  />
                  <div className={styles.product_info_container}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                    <span>SIZE: {item.size}</span>
                    {/* <span>QUANTITY: {item.quantity}</span> */}
                    <span>
                      QUANTITY: <QuantityCounter item={item} />
                    </span>
                    <span>UNIT PRICE: €{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item)}
                      className={styles.remove_button}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <ShoppingBagTotal
              subtotal={cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              tax={7}
              orderTotal={0}
              onProceedToCheckout={() => {}}
            />
          </div>
        )}
      </div>
    </div>
  );
}
