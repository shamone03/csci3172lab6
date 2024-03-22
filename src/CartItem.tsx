import { useContext } from "react";
import "./App.css"
import { ShoppingCartContext } from "./ShoppingCartContext";

function CartItem({ cartItem: { id, name, price, count } }: { cartItem: CartItem }) {
    const { updateCart } = useContext(ShoppingCartContext);

    return (
        <div className="d-flex d-flex-col align-items-center justify-content-center text-center">
            <h1>{name}</h1>
            <h2>Price: {(price * count).toFixed(2)}</h2>
            <button className="item-btn background-red" onClick={() => updateCart({ intent: "remove", id })}>Remove</button>
            <div className="d-flex d-flex-row gap-2 align-items-center justify-content-center">
                <button className="item-btn" onClick={() => updateCart({ intent: "decrement", id })}><span className="material-symbols-outlined">remove</span></button>
                <p>{count}</p>
                <button className="item-btn" onClick={() => updateCart({ intent: "increment", id })}><span className="material-symbols-outlined">add</span></button>
            </div>
        </div>
    )
}

export default CartItem;