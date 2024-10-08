import styles from './Product.module.css';
import ButtonProduct from './ButtonProduct'
import { useCartContext } from '@/hooks/useCartContext';

function Product({ product }) {
    const { cart } = useCartContext();
    const inCart = cart.some((cartProduct) => cartProduct.id === product.id);

    const windowSize = window.screen.width;
    const image = windowSize <= 1200 ? product.image.mobile : product.image.desktop;

    return (
        <div className={styles.container}>
            <div className={styles.group1}>
                {inCart ? <div className={styles.border}></div> : ""}
                <img src={image} alt='Image of desert' className={styles.image} />
                <div className={styles.button}>
                    <ButtonProduct product={product} />
                </div>
            </div>
            <div className={styles.group2} >
                <p className={styles.category}>{product.category}</p>
                <h2 className={styles.name}>{product.name}</h2>
                <span className={styles.price}>{`$${product.price.toFixed(2)}`}</span>
            </div>
        </div>
    )
}
export default Product;