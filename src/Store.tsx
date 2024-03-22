import { useContext } from "react";
import StoreItem from "./StoreItem";
import { ShoppingCartContext } from "./ShoppingCartContext";

function Store({ storeItems }: { storeItems: Item[] }) {
    const { showCart } = useContext(ShoppingCartContext);

    return (
        <section className={`${showCart ? "store-cart-show" : "store-cart-hidden"}`}>
            <h1 className="text-center">Store</h1>
            <div id="store-items" className="gap-2">
                {storeItems.map(i => <StoreItem key={i.id} storeItem={i}></StoreItem>)}
            </div>
        </section>
    )
}

export default Store;