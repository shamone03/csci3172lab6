import { useContext } from "react";
import "./App.css"
import { ShoppingCartContext } from "./ShoppingCartContext";

function StoreItem({ id, name, price }: { id: number, name: string, price: number }) {
    const { updateCart } = useContext(ShoppingCartContext);

    return (
        <div className="item">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button onClick={e => updateCart({ type: "add", id })}>Add</button>
        </div>
    )
}

export default StoreItem;