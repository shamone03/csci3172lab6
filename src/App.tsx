import { useEffect, useReducer, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { items } from "./data";
import Store from "./Store";
import Cart from "./Cart";

function App() {
    const [storeItems, setStoreItems] = useState<Item[]>([]);
    useEffect(() => {
        setStoreItems(items);
    }, []);

    const router = (cart: CartItem[], action: { intent: string, id: number }): CartItem[] => {
        switch (action.intent) {
            case "remove": {
                return cart.filter(i => i.id !== action.id);
            }
            case "add": {
                if (cart.find(i => i.id === action.id)) {
                    return cart.map(i => i.id === action.id ? { ...i, count: i.count + 1 } : i);
                } else {
                    const newItem = items.find(i => i.id === action.id);
                    if (newItem) {
                        return [...cart, { ...newItem, count: 1 }];
                    }
                    return [...cart];
                }
            }
            case "increment": {
                return cart.map(i => i.id === action.id ? { ...i, count: i.count + 1 } : i);
            }
            case "decrement": {
                const newCart = cart.map(i => i.id === action.id ? { ...i, count: i.count - 1 } : i);
                const item = newCart.find(i => i.id === action.id);
                if (item && item.count <= 0) {
                    return cart.filter(i => i.id !== action.id);
                }
                return newCart;
            }
            default: throw new Error("invalid action");
        }

    }

    const [showCart, setShowCart] = useState(false);
    const [cart, updateCart] = useReducer(router, []);

    return (
        <>
            <button className="float" onClick={() => setShowCart(i => !i)}><span className="material-symbols-outlined">shopping_cart</span></button>
            <main className="d-flex d-flex-row gap-2">
                <ShoppingCartContext.Provider value={{ cart, updateCart, showCart, setShowCart }}>
                    <Store storeItems={storeItems} />
                    <Cart />
                </ShoppingCartContext.Provider>
            </main>
        </>
    );
}

export default App;
