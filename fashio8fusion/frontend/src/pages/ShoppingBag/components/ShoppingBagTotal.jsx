import React from 'react';
import styles from './ShoppingBagTotal.module.css';

export const ShoppingBagTotal = ({
  subtotal,
  tax,
  orderTotal,
  onProceedToCheckout,
}) => {
  return (
    <div className={styles.total_container}>
      <div className={styles.content_container}>
        <div className={styles.price_container}>
          <p>Subtotal:</p>
          <p>€{subtotal.toFixed(2)}</p>
        </div>
        <div className={styles.price_container}>
          <p>Tax</p>
          <p>
            ({tax.toFixed(2)}%): €{tax.toFixed(2)}
          </p>
        </div>
        <div className={styles.price_container}>
          <p>Order Total:</p>
          <p>€{(subtotal * ((100 + tax) / 100)).toFixed(2)}</p>
        </div>
      </div>
      <button onClick={onProceedToCheckout} className={styles.button_container}>
        Proceed to Checkout
      </button>
    </div>
  );
};
