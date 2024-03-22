import { useContext } from "react";
import "./App.css"
import { ShoppingCartContext } from "./ShoppingCartContext";

function StoreItem({ storeItem: { id, name, price } }: { storeItem: Item }) {
    const { updateCart } = useContext(ShoppingCartContext);

    return (
        <div className="d-flex d-flex-col align-items-center justify-content-center text-center">
            <h1>{name}</h1>
            <h2>Price: ${price}</h2>
            <button className="item-btn background-green text-center" onClick={() => updateCart({ intent: "add", id })}><span className="material-symbols-outlined">add</span></button>
        </div>
    )
}

export default StoreItem;