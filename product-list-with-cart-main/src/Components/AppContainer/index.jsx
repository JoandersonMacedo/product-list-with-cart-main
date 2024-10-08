import styles from './AppContainer.module.css';
import ProductList from '../ProductList';
import Cart from '../Cart';
import OrderConfirmation from '../OrderConfirmation';

function AppContainer() {

    return (
        <>
            <OrderConfirmation />
            <main>
                <ProductList />
                <Cart />
            </main>
        </>
    )
}

export default AppContainer;