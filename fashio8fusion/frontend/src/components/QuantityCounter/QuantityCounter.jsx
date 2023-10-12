import { useContext, useState } from 'react';
import { Store } from '../../hooks/StoreContext';
import styles from './QuantityCounter.module.css';

// export const QuantityCounter = ( {item}) => {
//     const [count, setCount] = useState(0);

//     const decreaseCounter = () => {
//         setCount(count - 1);
//     };

//     const increaseCounter = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div className={styles.quantity_counter_container}>
//             <button onClick={decreaseCounter} className={styles.unstyle_button}>-</button>
//             <p>{count}</p>
//             <button onClick={increaseCounter} className={styles.unstyle_button}>+</button>
//         </div>
//     );
// }

export const QuantityCounter = ({ item }) => {
  const { state, dispatch } = useContext(Store);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity: newQuantity },
    });
  };

  return (
    <div className={styles.quantity_counter_container}>
      <button
        className={styles.unstyle_button}
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        className={styles.unstyle_button}
        onClick={() => handleQuantityChange(quantity + 1)}
        disabled={
          quantity >= item.sizes.find((s) => s.size === item.size)?.quantity
        }
      >
        +
      </button>
    </div>
  );
};
