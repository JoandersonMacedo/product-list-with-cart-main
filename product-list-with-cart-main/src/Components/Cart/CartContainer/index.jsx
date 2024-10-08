import styles from './CartContainer.module.css';
import { useContext } from 'react';
import CartProduct from '../CartProduct';
import { OrderConfirmationContext } from '@/Contexts/OrderConfirmationContext';
import { useCartContext } from '@/hooks/useCartContext';

function CartContainer() {
    const { setIsOpen } = useContext(OrderConfirmationContext);
    const { cart, orderTotal } = useCartContext();

    if (cart.length > 0) {
        return (
            <div className={styles.withItens}>
                <div>
                    {cart.map((cartProduct) => {
                        return <CartProduct cartProduct={cartProduct} key={cartProduct.id} />
                    })}
                </div>
                <div className={styles.orderTotal} >
                    <p>Order Total</p>
                    <span>{`$${orderTotal.toFixed(2)}`}</span>
                </div>
                <div className={styles.group} >
                    <div className={styles.carbonNeutral} >
                        <img src="./assets/images/icon-carbon-neutral.svg" alt="Icon carbon-neutral" />
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>
                    <div className={styles.confirmOrther} onClick={() => setIsOpen(true)}>
                        <p>Confirm Orther</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.noItems}>
            <img src="./assets/images/illustration-empty-cart.svg" alt="Empty cart" />
            <p>Your added items will appear here</p>
        </div>

    )
}

export default CartContainer;