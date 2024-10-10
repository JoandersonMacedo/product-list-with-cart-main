import styles from './AppContainer.module.css';
import ProductList from '../ProductList';
import Cart from '../Cart';
import OrderConfirmation from '../OrderConfirmation';

function AppContainer() {

    return (
        <>
            
            <main>
                <div className={styles.main}>
                    <ProductList />
                    <Cart />
                    <OrderConfirmation />
                </div>
            </main>
        </>
    )
}

export default AppContainer;