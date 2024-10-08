import { CartContext } from "@/Contexts/CartContext";
import { useContext } from "react";

export const useCartContext = () => {

    const {cart, setCart} = useContext(CartContext)

    const orderTotal = cart.reduce(
        (accumulator, cartProduct) => accumulator + (cartProduct.price * cartProduct.quantity),0);

    function addProduct(product) {
        setCart([
            ...cart,
            {
                ...product,
                quantity: 1,
                priceTotal: product.price
            }
        ]);
    }

    function addQuantity(id) {
        setCart(cart.map((cartProduct) => {
            if (cartProduct.id === id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity += 1,
                    priceTotal: (cartProduct.priceTotal + cartProduct.price)
                };
            } else {
                return cartProduct;
            }
        }))
    }

    function removeProduct (id) {
        setCart(cart.filter(cartProduct => cartProduct.id !== id))
    }

    function removeQuantity (id, quantity) {
        if(quantity === 1){
            return removeProduct(id)
        }

        setCart(cart.map((cartProduct) => {
            if (cartProduct.id === id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity -= 1,
                    priceTotal: (cartProduct.priceTotal - cartProduct.price)
                };
            } else {
                return cartProduct;
            }
        }))
    }

    return {
        cart,
        setCart,
        addProduct,
        addQuantity,
        removeQuantity,
        removeProduct,
        orderTotal
    }
}