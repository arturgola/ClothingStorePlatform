// import styles from './ProductSizeButton.module.css';

// // export const ProductSizeButton = ({ children, onClick }) => {
// //     return (
// //         <button onClick={onClick} className={styles.size_button_container}>
// //             {children}
// //         </button>
// //     )
// // }

import styles from './ProductSizeButton.module.css';

export const ProductSizeButton = ({ children, onSelect, selected }) => {
  const handleClick = () => {
    onSelect(children); // Notify the parent component about the selected size
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.size_button_container} ${
        selected ? styles.selected : ''
      }`}
    >
      {children}
    </button>
  );
};
