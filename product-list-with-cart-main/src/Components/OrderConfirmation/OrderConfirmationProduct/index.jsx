import styles from './OrderConfirmationProduct.module.css';

function OrderConfirmationProduct({ cartProduct }) {
    return (
        <div className={styles.container}>
            <img className={styles.thumbnail} src={cartProduct.image.thumbnail} alt='Thumbnail' />
            <p className={styles.name}>{cartProduct.name}</p>
            <div className={styles.group}>
                <span className={styles.quantity}>{`${cartProduct.quantity}x`}</span>
                <span className={styles.price}>{`@ $${cartProduct.price.toFixed(2)}`}</span>
            </div>
            <span className={styles.priceTotal}>{`$${cartProduct.priceTotal.toFixed(2)}`}</span>
        </div>
    )
}

export default OrderConfirmationProduct;