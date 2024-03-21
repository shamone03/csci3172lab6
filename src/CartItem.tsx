import { useContext } from "react";
import "./App.css"
import { ShoppingCartContext } from "./ShoppingCartContext";

function CartItem({ cartItem: { id, name, price, count } }: { cartItem: CartItem }) {
    const { updateCart } = useContext(ShoppingCartContext);

    return (
        <div className="item">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button onClick={() => updateCart({ intent: "remove", id })}>Remove</button>
            <button onClick={() => updateCart({ intent: "increment", id })}>+</button>
            <p>{count}</p>
            <button onClick={() => updateCart({ intent: "decrement", id })}>-</button>
        </div>
    )
}

export default CartItem;