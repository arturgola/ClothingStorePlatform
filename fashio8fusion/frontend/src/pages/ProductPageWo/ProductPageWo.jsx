import styles from './ProductPageWo.module.css'

export const Women = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.filter_container}>
                <button className={styles.unstyle_button}>FILTERS</button>
                <button className={styles.unstyle_button}>SORT</button>
            </div>
            <div className={styles.product_container}>
                <div className={styles.product}>
                    <img src="/assets/forCatalog_1.png" alt="arrow" />
                    <p className={styles.product_header_category}>TOP WOMAN</p>
                    <p className={styles.product_header}>Angels malu zip jeans slim black used</p>
                    <p className={styles.product_price}>139,00 EUR</p>
                </div>
                <div className={styles.product}>
                    <img src="/assets/forCatalog_2.png" alt="arrow" />
                    <p className={styles.product_header_category}>TOP WOMAN</p>
                    <p className={styles.product_header}>Angels malu zip jeans slim black used</p>
                    <p className={styles.product_price}>139,00 EUR</p>
                </div>
                <div className={styles.product}>
                    <img src="/assets/forCatalog_3.png" alt="arrow" />
                    <p className={styles.product_header_category}>TOP WOMAN</p>
                    <p className={styles.product_header}>Angels malu zip jeans slim black used</p>
                    <p className={styles.product_price}>139,00 EUR</p>
                </div>
                <div className={styles.product}>
                    <img src="/assets/forCatalog_4.png" alt="arrow" />
                    <p className={styles.product_header_category}>TOP WOMAN</p>
                    <p className={styles.product_header}>Angels malu zip jeans slim black used</p>
                    <p className={styles.product_price}>139,00 EUR</p>
                </div>
            </div>
        </div>
    )
}
