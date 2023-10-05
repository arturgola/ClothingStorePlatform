import { useState } from 'react';
import styles from './QuantityCounter.module.css';


export const QuantityCounter = () => {
    const [count, setCount] = useState(0);

    const decreaseCounter = () => {
        setCount(count - 1);
    };

    const increaseCounter = () => {
        setCount(count + 1);
    };

    return (
        <div className={styles.quantity_counter_container}>
            <button onClick={decreaseCounter} className={styles.unstyle_button}>-</button>
            <p>{count}</p>
            <button onClick={increaseCounter} className={styles.unstyle_button}>+</button>
        </div>
    );
}