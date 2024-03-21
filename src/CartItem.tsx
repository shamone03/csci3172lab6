import { useContext, useState } from "react";
import "./App.css"
import { ShoppingCartContext } from "./ShoppingCartContext";

function CartItem({ id, name, price, count }: CartItem) {
    const { updateCart } = useContext(ShoppingCartContext);

    return (
        <div className="item">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button onClick={e => updateCart({ type: "remove", id })}>Remove</button>
            <button onClick={e => updateCart({ type: "increment", id })}>+</button>
            <p>{count}</p>
            <button onClick={e => updateCart({ type: "decrement", id })}>-</button>
        </div >
    )
}

export default CartItem;