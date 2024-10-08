import styles from './Cart.module.css';
import CartContainer from './CartContainer';
import { useCartContext } from '@/hooks/useCartContext';

function Cart() {
    const { cart } = useCartContext();

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{`You Cart (${cart.length})`}</h3>
            <CartContainer />
        </section>
    )
}

export default Cart;
