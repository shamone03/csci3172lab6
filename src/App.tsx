import { useReducer, useState } from "react";
import StoreItem from "./StoreItem";
import { ShoppingCartContext } from "./ShoppingCartContext";
import CartItem from "./CartItem";
function App() {
    const items: IItem[] = [
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

    const reducer = (cart: CartItem[], action: { type: string, id: number }): CartItem[] => {
        if (action.type === "remove") {
            return cart.filter(i => i.id !== action.id);
        }
        if (action.type === "add") {
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
        if (action.type === "increment") {
            return cart.map(i => i.id === action.id ? { ...i, count: i.count + 1 } : i);
        }
        if (action.type === "decrement") {
            return cart.map(i => i.id === action.id ? { ...i, count: i.count - 1 } : i);
        }
        throw new Error("invalid action");
    }

    const [cart, updateCart] = useReducer(reducer, []);

    return (
        <div className="App">
            <ShoppingCartContext.Provider value={{ cart, updateCart }}>
                <div className="container">
                    <h1>Store</h1>
                    {items.map(i => <StoreItem key={i.id} id={i.id} name={i.name} price={i.price}></StoreItem>)}
                </div>
                <div>
                    <h1>Your cart</h1>
                    {cart.map(i => <CartItem key={i.id} id={i.id} name={i.name} price={i.price} count={i.count}></CartItem>)}
                </div>
            </ShoppingCartContext.Provider>
        </div>
    );
}

export default App;
