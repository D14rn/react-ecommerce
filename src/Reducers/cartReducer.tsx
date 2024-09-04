type CartItem = {
    id: number,
    amount: number,
    quantity: number,
    price: number
}

type CartItemList = CartItem[];

type CartAction = {
    item: CartItem,
    type: string,
    itemCount: number
}

export type { CartItem, CartItemList, CartAction };

export const itemIndex = (items: CartItemList, target: CartItem) => {
    const targetIndex = items.map(elem => elem.id).indexOf(target.id);
    return targetIndex;
}

export const hasSufficientStock = (currentQuantity: number, additionalQuantity: number, stock: number) => {
    return (stock - currentQuantity - additionalQuantity) >= 0;
} 

const cartReducer = (cartItems: CartItemList, action: CartAction) => {
    const newCart = [...cartItems];
    const res = itemIndex(newCart, action.item);
    switch (action.type) {
        case 'add': {
            if (action.itemCount <= 0) { return newCart }
            if (res !== -1) {
                return (newCart.map((curr) => {
                    if (curr.id == action.item.id) {
                        if (hasSufficientStock(curr.amount, action.itemCount, curr.quantity)) {
                            curr.amount = curr.amount + action.itemCount;
                        }
                    }
                    return curr;
                }));
            }
            if (action.itemCount <= action.item.quantity) {
                action.item.amount = action.itemCount;
                return newCart.concat(action.item);
            }
            return newCart;
        }
        case 'remove': {
            if (res == -1) {
                return newCart;
            }
            return newCart.toSpliced(res, 1);
        }
        default: {
            return newCart;
        }
    }
}

export default cartReducer;