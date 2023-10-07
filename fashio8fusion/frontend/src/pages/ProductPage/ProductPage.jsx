import { ProductSizeButton } from '../../components/ProductSizeButton/ProductSizeButton';
import { QuantityCounter } from '../../components/QuantityCounter/QuantityCounter';
import styles from './ProductPage.module.css';

export const ProductPage = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.product_picture_container}>
                <img
                    src="/assets/productPage.png"
                    alt="profile"
                />
            </div>
            <div>
                <div className={styles.product_description_container}>
                    <p className={styles.header_container}>Women Black Checked Fit and Flare Dress</p>
                    <p className={styles.text_container}>SELECT SIZE (Centimeters)</p>
                    <div className={styles.size_button_container_main}>
                        <ProductSizeButton>XS</ProductSizeButton>
                        <ProductSizeButton>S</ProductSizeButton>
                        <ProductSizeButton>M</ProductSizeButton>
                        <ProductSizeButton>L</ProductSizeButton>
                        <ProductSizeButton>XL</ProductSizeButton>
                    </div>
                    <div className={styles.text_price_container}>
                        <div>
                            <p className={styles.text_container}>QUANTITY</p>
                            <QuantityCounter />
                        </div>
                        <div>
                            <p className={styles.text_container}>PRICE TOTAL</p>
                            <p className={styles.price_tag}>90,00 EUR</p>
                        </div>
                    </div>
                    <button className={styles.add_bag_button}>
                        ADD TO BAG
                    </button>
                    <div className={styles.description_text_container}>
                        <p>FREE SHIPPING</p>
                        <p>PRODUCT CODE: RFKK1024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


