import { useCartContext } from '@/hooks/useCartContext';
import styles from './CartProduct.module.css';

function CartProduct({ cartProduct }) {
    const { removeProduct } = useCartContext();

    return (
        <div className={styles.container}>
            <p className={styles.name}>{cartProduct.name}</p>
            <div className={styles.group}>
                <span className={styles.quantity}>{`${cartProduct.quantity}x`}</span>
                <span className={styles.price}>{`@ $${cartProduct.price.toFixed(2)}`}</span>
                <span className={styles.priceTotal}>{`$${cartProduct.priceTotal.toFixed(2)}`}</span>
            </div>
            <div className={styles.xIcon} onClick={() => removeProduct(cartProduct.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                </svg>
            </div>
        </div>
    )
}

export default CartProduct;