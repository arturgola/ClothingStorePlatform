import React from 'react'
import styles from './ShoppingBagTotal.module.css';

export const ShoppingBagTotal = ({ subtotal, tax, orderTotal, onProceedToCheckout }) => {
    return (
        <div className="shopping-bag">
            <h2>Your Shopping Bag</h2>
            <div className="subtotal">
                Subtotal: ${subtotal.toFixed(2)}
            </div>
            <div className="tax">
                Tax (7%): ${tax.toFixed(2)}
            </div>
            <div className="order-total">
                Order Total: ${orderTotal.toFixed(2)}
            </div>
            <button onClick={onProceedToCheckout}>Proceed to Checkout</button>
        </div>
    );
};