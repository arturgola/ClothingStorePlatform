// Card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css'; // Use the correct module import

function Card({ product }) {
    const { name, price, image, description } = product;

    return (
        <div className={styles.card}>
            <div className={styles['card-image']}>
                <img src={image} alt={name} />
            </div>
            <div className={styles['card-content']}>
                <h2 className={styles['card-title']}>{name}</h2>
                <p className={styles['card-description']}>{description}</p>
                <p className={styles['card-price']}>${price}</p>
                <button className={styles['card-button']}>Add to Cart</button>
            </div>
        </div>
    );
}

Card.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;

