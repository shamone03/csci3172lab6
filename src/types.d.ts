type Item = {
    name: string,
    price: number,
    id: number
}

type CartItem = Item & { count: number }

type IShoppingCartContext = {
    cart: CartItem[],
    updateCart: React.Dispatch<{ type: "remove" | "add" | "increment" | "decrement", id: number }>
}
