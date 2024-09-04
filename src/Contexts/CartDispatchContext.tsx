import { createContext, Dispatch } from "react";
import { CartAction } from "../Reducers/cartReducer";

const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

export default CartDispatchContext;