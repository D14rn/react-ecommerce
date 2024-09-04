import { createContext } from "react";
import { CartItemList } from "../Reducers/cartReducer";

const CartItemsContext = createContext<CartItemList | null>(null);

export default CartItemsContext;