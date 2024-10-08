import { useCartContext } from '@/hooks/useCartContext';
import styles from './ButtonProduct.module.css';

function ButtonProduct({ product }) {

    const { cart,
        addProduct,
        addQuantity,
        removeQuantity } = useCartContext();

    const cartProduct = cart.find((cartProduct) => cartProduct.id === product.id);

    if (cartProduct) {
        return (
            <div className={styles.inCart} >
                <div className={styles.deQuantity} onClick={() => removeQuantity(cartProduct.id, cartProduct.quantity)}  >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                        </svg>
                    </div>
                </div>
                <span>{cartProduct.quantity}</span>
                <div className={styles.inQuantity} onClick={() => addQuantity(cartProduct.id)} >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                            <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div onClick={() => addProduct(product)} className={styles.addToCart}>
            <div className={styles.border}></div>
            <div className={styles.cartIcon}>
                <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart" />
            </div>
            <span>Add to Cart</span>
        </div>
    )
}

export default ButtonProduct;