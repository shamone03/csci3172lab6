import { useReducer } from "react";
import StoreItem from "./StoreItem";
import { ShoppingCartContext } from "./ShoppingCartContext";
import CartItem from "./CartItem";

function App() {
    const items: Item[] = [
        {
            id: 0,
            name: "foheaof",
            price: 1
        },
        {
            id: 1,
            name: "foheaof",
            price: 1
        },
        {
            id: 2,
            name: "foheaof",
            price: 1
        },
        {
            id: 3,
            name: "foheaof",
            price: 1
        }
    ]

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

    const [cart, updateCart] = useReducer(router, []);

    return (
        <div>
            <ShoppingCartContext.Provider value={{ cart, updateCart }}>
                <div>
                    <div>
                        <h1>Store</h1>
                        {items.map(i => <StoreItem key={i.id} storeItem={i}></StoreItem>)}
                    </div>
                    <div className="cart">
                        <h1>Your cart</h1>
                        {cart.map(i => <CartItem key={i.id} cartItem={i}></CartItem>)}
                    </div>
                </div>
            </ShoppingCartContext.Provider>
        </div>
    );
}

export default App;
