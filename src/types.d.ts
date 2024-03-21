type Item = {
    name: string,
    price: number,
    id: number,
    description: string,
    image: string
}

type CartItem = Item & { count: number }

type IShoppingCartContext = {
    updateCart: React.Dispatch<{ intent: "remove" | "add" | "increment" | "decrement", id: number }>
}
