import { useContext } from "react";
import "./App.css"
import { ShoppingCartContext } from "./ShoppingCartContext";

function StoreItem({ storeItem: { id, name, price } }: { storeItem: Item }) {
    const { updateCart } = useContext(ShoppingCartContext);

    return (
        <div className="item text-center">
            <h1>{name}</h1>
            <h2>Price: ${price}</h2>
            <button onClick={() => updateCart({ intent: "add", id })}>Add</button>
        </div>
    )
}

export default StoreItem;