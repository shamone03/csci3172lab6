type Item = {
    id: number,
    name: string,
    price: number,
}

type CartItem = Item & { count: number }

type IShoppingCartContext = {
    cart: CartItem[],
    updateCart: React.Dispatch<{ intent: "remove" | "add" | "increment" | "decrement", id: number }>,
    showCart: boolean,
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}
