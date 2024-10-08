import { useCartContext } from '@/hooks/useCartContext';
import styles from './OrderConfirmation.module.css';
import OrderConfirmationProduct from './OrderConfirmationProduct';
import { useContext } from 'react';
import { OrderConfirmationContext } from '@/Contexts/OrderConfirmationContext';


function OrderConfirmation() {
    const { cart, setCart, orderTotal } = useCartContext();
    const { isOpen, setIsOpen } = useContext(OrderConfirmationContext);

    function startNewCart() {
        setCart([]);
        setIsOpen(false)
    }

    return (
        <>
            {isOpen &&
                <div className={styles.background}> 
                    <div className={styles.orderConfirmation} >
                        <img className={styles.confirmIicon} src="./assets/images/icon-order-confirmed.svg" alt="Order confirmed" />
                        <div className={styles.group1}>
                            <h3 className={styles.title} >Order Confirmed</h3>
                            <p className={styles.subTitle}>We hope you enjoy your food</p>
                        </div>
                        <div className={styles.group2}>
                            <div className={styles.scroll}>
                                {cart.map((cartProduct) =>
                                    <OrderConfirmationProduct key={cartProduct.id} cartProduct={cartProduct} />
                                )}
                            </div>
                            <div className={styles.orderTotal}>
                                <p>Order Total</p>
                                <span>{`$${orderTotal.toFixed(2)}`}</span>
                            </div>
                        </div>
                        <div className={styles.button} onClick={startNewCart}>
                            <p>Start New Order</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default OrderConfirmation;