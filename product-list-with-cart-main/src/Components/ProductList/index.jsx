import Product from './Product';
import styles from './ProductList.module.css';
import products from '@/data.json'

function ProductList() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Desserts</h1>
            <div className={styles.productList}>
                {products.map(product => {
                    return (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ProductList;