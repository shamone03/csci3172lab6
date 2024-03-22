import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import CartItem from "./CartItem";

function Cart() {
    const { cart, showCart } = useContext(ShoppingCartContext);

    return (
        <section id="cart" className={`${showCart ? "cart-show" : "cart-hidden"}`}>
            <h1 className="text-center">Your cart</h1>
            <h4 className="text-center">Total: ${cart.reduce((val, i) => val += i.price * i.count, 0).toFixed(2)}</h4>
            <div className="d-flex d-flex-col align-items-center justify-content-center gap-2">
                {cart.map(i => <CartItem key={i.id} cartItem={i}></CartItem>)}
            </div>
        </section>
    )
}

export default Cart;