import styles from './ProductSizeButton.module.css';

export const ProductSizeButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.size_button_container}>
            {children}
        </button>
    )
}
