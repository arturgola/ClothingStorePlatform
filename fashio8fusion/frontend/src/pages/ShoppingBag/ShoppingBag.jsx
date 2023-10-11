import React from 'react'
import { ShoppingBagTotal } from './components/ShoppingBagTotal';
import styles from './ShoppingBag.module.css';

export const ShoppingBag = () => {
    // Example data
    const subtotal = 100;
    const taxRate = 0.07; // 7% tax rate
    const tax = subtotal * taxRate;
    const orderTotal = subtotal + tax;

    const handleProceedToCheckout = () => {
        // Handle the checkout logic here
        console.log('Proceeding to checkout...');
    };

    return (
        <div className={styles.main_container}>
            <h1>Shopping Bag</h1>
            <div>
                <ShoppingBagTotal
                    subtotal={subtotal}
                    tax={tax}
                    orderTotal={orderTotal}
                    onProceedToCheckout={handleProceedToCheckout}
                />
            </div>
        </div>
    );
}